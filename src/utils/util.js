import DeliveryTaxRates from "../components/shopSettings/DeliveryTaxRates";
import ShopInfo from "../components/shopSettings/ShopInfo";
import TaxOption from "../components/shopSettings/TaxOption";
import Terminals from "../components/shopSettings/Terminals";


export const getPageToBeRendered = (pageToBeRendered) => {

    switch (pageToBeRendered) {
        case 'shop':
            return <ShopInfo />;
        case 'taxoption':
            return <TaxOption />;
        case 'deliverytax':
            return <DeliveryTaxRates />;
        case 'terminals':
            return <Terminals />;
        default:
            return;
    }
}

export const getBooleanTranslation = (value) => {
    if (value) return "enabled"
    return "disabled"
}