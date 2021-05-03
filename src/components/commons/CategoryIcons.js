import React from 'react';
import {ReactComponent as IconFood} from './../../images/cat_comida.svg';
import {ReactComponent as IconPurchases} from './../../images/cat_compras.svg';
import {ReactComponent as IconBillsAndPayments} from './../../images/cat_cuentas-y-pagos.svg';
import {ReactComponent as IconFun} from './../../images/cat_diversion.svg';
import {ReactComponent as IconHome} from './../../images/cat_hogar.svg';
import {ReactComponent as IconClothing} from './../../images/cat_ropa.svg';
import {ReactComponent as IconHealthAndHygiene} from './../../images/cat_salud-e-higiene.svg';
import {ReactComponent as IconTransport} from './../../images/cat_transporte.svg';

const iconByName = {
    food: IconFood,
    purchases: IconPurchases,
    home: IconHome,
    transport: IconTransport,
    clothing: IconClothing,
    health: IconHealthAndHygiene,
    payments: IconBillsAndPayments,
    fun: IconFun
};

const CategoryIcon = ({ name }) => {
    const IconByName = iconByName[name];

    return(
        <IconByName/>
    );
};

export default CategoryIcon;