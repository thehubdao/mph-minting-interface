import { AbiCoder, AlchemyProvider, Contract, JsonRpcProvider, Typed, ethers } from 'ethers'
import MPHContractABI from '../abi/MPHContractABI.json'

const MPH_CONTRACT_ADDRESS = process.env.MPH_CONTRACT_ADDRESS!

const MPH_CONTRACT = new Contract(MPH_CONTRACT_ADDRESS, MPHContractABI)

export const mint = async (signer: any) => {
    try {
        const contract = MPH_CONTRACT.connect(signer) as any
        const estimatedGas = await signer.estimateGas(contract.mint) 
        console.log(estimatedGas * BigInt("4"), estimatedGas)
        const tx = await contract.mint({
            value: ethers.parseUnits('0.0069', 'ether'),
            gasLimit: estimatedGas * BigInt("3")
        })
        
        await tx.wait()
    } catch (err) {
        console.log(err)
        return false
    }

    return true
}

export const hasWalletMinted = async (signer: any) => {
    const contract = MPH_CONTRACT.connect(signer) as Contract
    const address = await signer.getAddress()
    const balance = Number(await contract.balanceOf(Typed.address(address)))
    if (balance) return true
    return false
}

export const getTokenSupply = async () => {
    const provider = new JsonRpcProvider('https://eth-mainnet.g.alchemy.com/v2/XK_ORiT_XMIf9pvt7OsKmE3tJxTh5e5W')
    const encodedData = await provider.getStorage(MPH_CONTRACT_ADDRESS, 12)

    const decodedData = (AbiCoder.defaultAbiCoder().decode(['uint256'], encodedData))

    return decodedData.toString()
}