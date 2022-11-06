import {CAMPSITES} from '../../app/shared/CAMPSITES';

export const SelectAllCampsites = () => {
    return CAMPSITES;
};

export const SelectRandonCampsites = () => {
    return CAMPSITES[ Math.floor( CAMPSITES.length * Math.random())];
};