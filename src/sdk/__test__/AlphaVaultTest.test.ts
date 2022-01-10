import { ethers } from "ethers";
import { AlphaVaultSDK } from "../AlphaVaultWrapper";

describe("SDK TESTS", () => {
  const wrapper = AlphaVaultSDK();
  // test("getTotalAmounts", async () => {
  //   const res = await wrapper.getTotalAmounts();
  //   expect(res).toBeTruthy();
  // });
  test("deposit", async () => {
    const res = await wrapper.deposit(
      [1e18, 0],
      [0, 1e18],
      0,
      0,
      process.env.TEST_ADDRESS as string
    );
    console.log(res);
    expect(res).toBeTruthy();
  });
  // test("withdraw", async () => {
  //   const res = await wrapper.withdraw(
  //     ethers.utils.parseEther("0.001"),
  //     ethers.utils.parseEther("0.001"),
  //     ethers.utils.parseEther("0.001"),
  //     process.env.TEST_ADDRESS
  //   );
  //   console.log(res);
  //   expect(res).toBeTruthy();
  // });

  // test("rebalance", async () => {
  //   const res = await wrapper.rebalance("0x0", "0x0", "0x0", "0x0", "0x0", "0x0", "0x0", "0x0");
  //   console.log(res);
  //   expect(res).toBeTruthy();
  // });
});
