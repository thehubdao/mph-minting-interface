import { Contract, Typed, ethers } from 'ethers'
import MPHContractABI from '../abi/MPHContractABI.json'
const MPH_CONTRACT_ADDRESS = process.env.MPH_CONTRACT_ADDRESS!

const MPH_CONTRACT = new Contract(MPH_CONTRACT_ADDRESS, MPHContractABI)

export const mint = async (signer: any) => {
    try {
        const contract = MPH_CONTRACT.connect(signer) as Contract
        const tx = await contract.mint({
            value: ethers.parseUnits('0.0069', 'ether'),
        })
        await tx.wait()
    } catch (err) {
        /* console.log(err) */
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
