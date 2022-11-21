import {BsPersonBoundingBox} from 'react-icons/bs';
import {FaUserFriends, FaMoneyCheck, FaHandshake } from 'react-icons/fa';
import {GiHouse, GiSave, GiHandGrip } from 'react-icons/gi';
export const menus = [

    {
        name: 'users',
        icon: <FaUserFriends />,
    },
    {
        name: 'guarantor',
        icon: <GiHouse />,
    },
    {
        name: 'loan',
        icon: <FaMoneyCheck />,
    },
    {
        name: 'decision mode',
        icon: <FaHandshake />,
    },
    {
        name: 'saving',
        icon: <GiSave />
    },
    {
        name: 'loan request',
        icon: <GiHandGrip />
    },
    {
        name: 'whish list',
        icon: <BsPersonBoundingBox />
    },
]