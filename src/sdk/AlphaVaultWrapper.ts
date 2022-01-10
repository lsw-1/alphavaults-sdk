import { ethers } from "ethers";
import { AlphaVault, AlphaVault__factory } from "../../types/ethers-contracts";

type InitContract = (
  webProvider?: string | ethers.utils.ConnectionInfo
) => Pick<AlphaVault, "deposit" | "rebalance" | "withdraw" | "getTotalAmounts">;

export const AlphaVaultSDK: InitContract = (webProvider) => {
  const provider = new ethers.providers.JsonRpcProvider(webProvider);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    process.env.ALPHA_VAULT_ADDRESS as string,
    AlphaVault__factory.abi,
    signer
  ) as AlphaVault;

  return {
    deposit: async (amount0Desired, amount1Desired, amount0Min, amount1Min, to) => {
      return contract.deposit(amount0Desired, amount1Desired, amount0Min, amount1Min, to, {
        from: process.env.TEST_ADDRESS,
        gasLimit: ethers.utils.parseUnits("1000000", "wei"),
      });
    },
    withdraw: async (shares, amount0Min, amount1Min, to) => {
      return contract.withdraw(shares, amount0Min, amount1Min, to, {
        from: signer._address,
        gasLimit: ethers.utils.parseUnits("1000000", "wei"),
      });
    },
    rebalance: (
      swapAmount,
      sqrtPriceLimitX96,
      _baseLower,
      _baseUpper,
      _bidLower,
      _bidUpper,
      _askLower,
      _askUpper
    ) => {
      return contract.rebalance(
        swapAmount,
        sqrtPriceLimitX96,
        _baseLower,
        _baseUpper,
        _bidLower,
        _bidUpper,
        _askLower,
        _askUpper,
        {
          gasLimit: 1000000,
          from: signer._address,
        }
      );
    },
    getTotalAmounts: async () => {
      return contract.getTotalAmounts();
    },
  };
};
