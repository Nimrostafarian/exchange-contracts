/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TickOverflowSafetyEchidnaTest } from "../TickOverflowSafetyEchidnaTest";

export class TickOverflowSafetyEchidnaTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TickOverflowSafetyEchidnaTest> {
    return super.deploy(
      overrides || {}
    ) as Promise<TickOverflowSafetyEchidnaTest>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TickOverflowSafetyEchidnaTest {
    return super.attach(address) as TickOverflowSafetyEchidnaTest;
  }
  connect(signer: Signer): TickOverflowSafetyEchidnaTest__factory {
    return super.connect(signer) as TickOverflowSafetyEchidnaTest__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TickOverflowSafetyEchidnaTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TickOverflowSafetyEchidnaTest;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "increaseFeeGrowthGlobal0X128",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "increaseFeeGrowthGlobal1X128",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "target",
        type: "int24",
      },
    ],
    name: "moveToTick",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "tickLower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "tickUpper",
        type: "int24",
      },
      {
        internalType: "int128",
        name: "liquidityDelta",
        type: "int128",
      },
    ],
    name: "setPosition",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526001805462ffffff19169055600060028190556001600160ff1b036003819055600455600581905560065534801561003b57600080fd5b506109688061004b6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630b0c061f146100515780633f03e19414610070578063541bdfb11461008d578063af759368146100c1575b600080fd5b61006e6004803603602081101561006757600080fd5b50356100e1565b005b61006e6004803603602081101561008657600080fd5b5035610104565b61006e600480360360608110156100a357600080fd5b508035600290810b91602081013590910b9060400135600f0b610127565b61006e600480360360208110156100d757600080fd5b503560020b6102ed565b600554818101116100f157600080fd5b6003805482019055600580549091019055565b6006548181011161011457600080fd5b6004805482019055600680549091019055565b600f19600284900b1361013957600080fd5b6010600283900b1261014a57600080fd5b8160020b8360020b1261015c57600080fd5b6001546003546004546000926101a892879260029290920b918691908680428160206001600160801b035b60075460009b9a9998979695949392909104906001600160c01b031661043b565b905060006101e084600160009054906101000a900460020b8560035460045460008042600160206001600160801b0380168161018757fe5b9050811561024f57600083600f0b121561022a57600285810b900b6000908152602081905260409020546001600160801b03161561021a57fe5b610225600086610696565b61024f565b600285810b900b6000908152602081905260409020546001600160801b031661024f57fe5b80156102bc57600083600f0b121561029757600284810b900b6000908152602081905260409020546001600160801b03161561028757fe5b610292600085610696565b6102bc565b600284810b900b6000908152602081905260409020546001600160801b03166102bc57fe5b60028054600f85900b0190819055600013156102d457fe5b6002546102e657600060058190556006555b5050505050565b600f19600282900b136102ff57600080fd5b6010600282900b1261031057600080fd5b600154600282810b91810b900b1461043857600154600282810b91810b900b12156103b55760018054600290810b909101810b900b6000908152602081905260409020546001600160801b03161561039357600180546003546004546007546103919460009460020b019291908490819042906001600160c01b03166106e8565b505b60018054600281810b8301900b62ffffff1662ffffff19909116179055610433565b600154600290810b810b900b6000908152602081905260409020546001600160801b0316156104105760015460035460045460075461040e9360009360029190910b9290918490819042906001600160c01b03166106e8565b505b60018054600019600282810b91909101900b62ffffff1662ffffff199091161790555b610310565b50565b60028b810b900b600090815260208d90526040812080546001600160801b031682610466828e610834565b9050856001600160801b0316816001600160801b031611156104b4576040805162461bcd60e51b81526020600482015260026024820152614c4f60f01b604482015290519081900360640190fd5b6001600160801b0382811615908216158114159450156105d9578d60020b8f60020b136105a9578b83600101819055508a8360020181905550898360030160076101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550888360030160006101000a81548166ffffffffffffff021916908360060b66ffffffffffffff1602179055508783600301601b6101000a81548163ffffffff021916908363ffffffff160217905550848360040160006101000a8154816001600160c01b0302191690836001600160c01b031602179055505b6003830180547effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16600160f81b1790555b82546fffffffffffffffffffffffffffffffff19166001600160801b038216178355866106375761063261062d8e600f0b8560000160109054906101000a9004600f0b600f0b6108f090919063ffffffff16565b610906565b610664565b61066461062d8e600f0b8560000160109054906101000a9004600f0b600f0b61091c90919063ffffffff16565b8354600f9190910b6001600160801b03908116600160801b0291161790925550909d9c50505050505050505050505050565b600290810b810b600090815260209290925260408220828155600181018390559081018290556003810191909155600401805477ffffffffffffffffffffffffffffffffffffffffffffffff19169055565b600296870b870b60009081526020989098526040909720600181018054909603909555948401805490930390925560038301805463ffffffff7b0100000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff6701000000000000008085048216909603169094027fffffffffff0000000000000000000000000000000000000000ffffffffffffff90921691909117600681810b90950390940b66ffffffffffffff1666ffffffffffffff19909416939093178281048416909503909216027fff00000000ffffffffffffffffffffffffffffffffffffffffffffffffffffff909316929092179091556004810180546001600160c01b0380821690940390931677ffffffffffffffffffffffffffffffffffffffffffffffff199093169290921790915554600160801b9004600f0b90565b60008082600f0b121561089957826001600160801b03168260000384039150816001600160801b031610610894576040805162461bcd60e51b81526020600482015260026024820152614c5360f01b604482015290519081900360640190fd5b6108ea565b826001600160801b03168284019150816001600160801b031610156108ea576040805162461bcd60e51b81526020600482015260026024820152614c4160f01b604482015290519081900360640190fd5b92915050565b818101828112156000831215146108ea57600080fd5b80600f81900b811461091757600080fd5b919050565b808203828113156000831215146108ea57600080fdfea264697066735822122014d64e412afca492969111cb0459eee7f0d39a7b707ac1949074115dd13e086364736f6c63430007060033";