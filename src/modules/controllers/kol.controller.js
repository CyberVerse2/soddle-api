import { catchAsync } from '../../common/utils/errorHandler.js'
import KOL from '../models/kol.model.js'
const dailyKols = [
    {
        name: 'vitalik.eth',
        age: 25,
        country: 'Russia',
        pfp: 'https://res.cloudinary.com/dbuaprzc0/image/upload/f_auto,q_auto/v1/Soddle/msnhff7mch5y4qze5sxs',
        accountCreation: 2011,
        followers: 5000000,
        ecosystem: 'Chain Founder',
    },
    {
        name: 'CZ 🔶 BNB',
        age: 45,
        country: 'China',
        pfp: 'https://res.cloudinary.com/dbuaprzc0/image/upload/f_auto,q_auto/v1/Soddle/vnuycryvuwaja2unsrat',
        accountCreation: 2017,
        followers: 5000000,
        ecosystem: 'CEX',
    },
    {
        name: 'Brian Armstrong',
        age: 45,
        country: 'USA',
        pfp: 'https://res.cloudinary.com/dbuaprzc0/image/upload/f_auto,q_auto/v1/Soddle/ij2djmahfktykkt9vp5r',
        accountCreation: 2008,
        followers: 2000000,
        ecosystem: 'CEX',
    },
    {
        name: 'Michael Saylor⚡️',
        age: 55,
        country: 'USA',
        pfp: 'https://res.cloudinary.com/dbuaprzc0/image/upload/f_auto,q_auto/v1/Soddle/upa67siri9cc0amcq7be',
        accountCreation: 2011,
        followers: 4000000,
        ecosystem: 'Bitcoin',
    },
    {
        name: 'toly 🇺🇸 | compressed',
        age: 45,
        country: 'USA; Ukraine',
        pfp: 'https://res.cloudinary.com/dbuaprzc0/image/upload/f_auto,q_auto/v1/Soddle/quuaczmi0kyobewixkqr',
        accountCreation: 2014,
        followers: 250000,
        ecosystem: 'Chain Founder',
    },
    {
        name: 'SBF',
        age: 35,
        country: 'USA',
        pfp: 'https://res.cloudinary.com/dbuaprzc0/image/upload/f_auto,q_auto/v1/Soddle/jzvpqw9bfdazrh8hqkqe',
        accountCreation: 2019,
        followers: 750000,
        ecosystem: 'CEX',
    },
    {
        name: 'Charles Hoskinson',
        age: 35,
        country: 'USA',
        pfp: 'https://res.cloudinary.com/dbuaprzc0/image/upload/f_auto,q_auto/v1/Soddle/o0ng47u8oqrwtrzhazx4',
        accountCreation: 2013,
        followers: 750000,
        ecosystem: 'Chain Founder',
    },
    {
        name: 'Emin Gün Sirer',
        age: 45,
        country: 'Turkey',
        pfp: 'https://res.cloudinary.com/dbuaprzc0/image/upload/f_auto,q_auto/v1/Soddle/ngmforjkndyfzkgwtbtm',
        accountCreation: 2011,
        followers: 250000,
        ecosystem: 'Chain Founder',
    },
    {
        name: 'Gavin Wood',
        age: 45,
        country: 'UK',
        pfp: 'https://res.cloudinary.com/dbuaprzc0/image/upload/f_auto,q_auto/v1/Soddle/wjlue0e0shdgvw4nhptz',
        accountCreation: 2009,
        followers: 250000,
        ecosystem: 'Chain Founder',
    },
    {
        name: 'Pavel Durov',
        age: 35,
        country: 'Russia',
        pfp: 'https://res.cloudinary.com/dbuaprzc0/image/upload/f_auto,q_auto/v1/Soddle/jvmpyvx1l8iv6adpts79',
        accountCreation: 2008,
        followers: 2000000,
        ecosystem: 'Chain Founder',
    },
    {
        name: 'Do Kwon',
        age: 35,
        country: 'South Korea',
        pfp: 'https://res.cloudinary.com/dbuaprzc0/image/upload/f_auto,q_auto/v1/Soddle/m5f6byxhkmu39z3jiqkh',
        accountCreation: 2011,
        followers: 750000,
        ecosystem: 'Chain Founder',
    },
    {
        name: 'Justin Sun',
        age: 35,
        country: 'China',
        pfp: 'https://res.cloudinary.com/dbuaprzc0/image/upload/f_auto,q_auto/v1/Soddle/k3q74gxpulgnasfensbz',
        accountCreation: 2017,
        followers: 4000000,
        ecosystem: 'Chain Founder',
    },
    {
        name: 'Zach XBT',
        age: 25,
        country: 'Singapore',
        pfp: 'https://res.cloudinary.com/dbuaprzc0/image/upload/f_auto,q_auto/v1/Soddle/ehoppwejmqajglcoksle',
        accountCreation: 2015,
        followers: 750000,
        ecosystem: 'Reporter',
    },
    {
        name: 'Layah Heilpern',
        age: 25,
        country: 'UK',
        pfp: 'https://res.cloudinary.com/dbuaprzc0/image/upload/f_auto,q_auto/v1/Soddle/s9b5jtbojo8kxxpk2dd0',
        accountCreation: 2012,
        followers: 750000,
        ecosystem: 'Reporter, Bitcoin',
    },
    {
        name: 'Gary Gensler',
        age: 65,
        country: 'USA',
        pfp: 'https://example.com/pfp.https://res.cloudinary.com/dbuaprzc0/image/upload/f_auto,q_auto/v1/Soddle/wsee5fbcouelnh5u1vut',
        accountCreation: 2021,
        followers: 750000,
        ecosystem: 'Government',
    },
    {
        name: 'Tyler Winklevoss',
        age: 45,
        country: 'USA',
        pfp: 'https://res.cloudinary.com/dbuaprzc0/image/upload/f_auto,q_auto/v1/Soddle/mfnpptht3htyo2sdxgjl',
        accountCreation: 2009,
        followers: 750000,
        ecosystem: 'CEX',
    },
    {
        name: 'Donald Trump',
        age: 75,
        country: 'USA',
        pfp: 'https://res.cloudinary.com/dbuaprzc0/image/upload/f_auto,q_auto/v1/Soddle/iefqlgxnvg3y2q7mucnr',
        accountCreation: 2009,
        followers: 5000000,
        ecosystem: 'Government, Bitcoin',
    },
    {
        name: 'Satoshi Nakamoto',
        age: 20,
        country: 'United States',
        pfp: 'https://example.com/pfp.jpg',
        accountCreation: 2010,
        followers: 6000000,
        ecosystem: 'Bitcoin',
    },
    {
        name: 'Elizabeth Warren',
        age: 75,
        country: 'USA',
        pfp: 'https://res.cloudinary.com/dbuaprzc0/image/upload/f_auto,q_auto/v1/Soddle/cmqzv1saekrrfwcdvm7l',
        accountCreation: 2011,
        followers: 5000000,
        ecosystem: 'Government',
    },
    {
        name: 'Jim Cramer',
        age: 65,
        country: 'USA',
        pfp: 'https://res.cloudinary.com/dbuaprzc0/image/upload/f_auto,q_auto/v1/Soddle/dvdlkrxcwav3xmvmkmdu',
        accountCreation: 2008,
        followers: 2000000,
        ecosystem: 'Reporter',
    },
]
function modifyData(oldData) {
    return {
        id: oldData._id,
        name: oldData.name,
        age: oldData.age,
        country: oldData.country,
        pfp: oldData.pfp,
        accountCreation: oldData.accountCreation,
        followers: oldData.followers,
        ecosystem: oldData.ecosystem,
    }
}

export const addKOLsToDB = async () => {
    const newKols = await KOL.insertMany(dailyKols)
    return newKols
}

export const getAllKols = catchAsync(async (req, res) => {
    const newKols = await KOL.find({})
    const kols = newKols.map(kol => modifyData(kol))
    return res.status(200).json({
        status: 'success',
        data: kols,
    })
})

export const getRandomKol = catchAsync(async (req, res) => {
    const kols = await KOL.find({})
    return res.status(200).json({
        status: 'success',
        data: modifyData(kols[Math.floor(Math.random() * kols.length)]),
    })
})
