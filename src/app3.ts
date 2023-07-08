import {SuiMoveObject, Coin as CoinAPI} from "@mysten/sui.js";

const COIN_TYPE = '0x2::coin::Coin';
const COIN_TYPE_ARG_REGEX = /^0x2::coin::Coin<(.+)>$/;



export type NftObject = {
  objectId: string;
  name: string;
  description: string;
  url: string;
  previousTransaction?: string;
  objectType: string;
};

export class Nft {
  public static isNft(obj: SuiMoveObject) {
    if (obj.fields.name && obj.fields.description && obj.fields.url) {
      return true;
    }
    return false;
  }

  public static getNftObject(
    obj: SuiMoveObject,
    previousTransaction?: string
  ): NftObject {
    return {
      objectId: obj.fields.id.id,
      name: obj.fields.name,
      description: obj.fields.description,
      url: obj.fields.url,
      previousTransaction,
      objectType: obj.type,
    };
  }
}