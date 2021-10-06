import { create } from "ipfs-http-client";

const client = create("https://ipfs.infura.io:5001/api/v0");

export const ipfsImage = async (file) => {
  const added = await client.add(file);
  const url = `https://ipfs.infura.io/ipfs/${added.path}`;
  return url;
};

export const ipfsJsonData = async (obj) => {
  const added = await client.add(JSON.stringify(obj));
  const url = `https://ipfs.infura.io/ipfs/${added.path}`;
  return url;
};
