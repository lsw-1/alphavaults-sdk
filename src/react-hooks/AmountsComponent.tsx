import React, { useEffect } from "react";
import { AlphaVaultSDK } from "../sdk/AlphaVaultWrapper";
// TODO
const AmountsComponent = () => {
  const sdk = AlphaVaultSDK();

  useEffect(() => {}, []);

  return sdk.getTotalAmounts();
};
