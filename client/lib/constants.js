import { env } from 'process'
import abi from './Transactions.json'


export const contractABI = abi.abi
export const contractAddress = process.env.local.CONTRACT_ADDRESS