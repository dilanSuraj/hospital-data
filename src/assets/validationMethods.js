import validationConstants from './validationConstants';


export function lengthWithoutSpaces(stringValue) {
    let remText = stringValue.replace(/\s/g, "");
    return remText.length;
}


export function isValidTextOnly(stringValue) {
    if(stringValue==  null){
        return false;
    }

    if(validationConstants.textOnlyRegExp.test(stringValue)){
        if(lengthWithoutSpaces(stringValue)<2){
            return false;
        }else{
            return true;
        }
    }else{
        return false;
    }
}

export function isValidEmail(stringValue) {
    if(validationConstants.emailRegExp.test(stringValue)){
        if(lengthWithoutSpaces(stringValue)<2){
            return false;
        }else{
            return true;
        }
    }else{
        return false;
    }
}

export function isValidAddress(stringValue) {
    if(stringValue==  null){
        return false;
    }

    if(validationConstants.addressRegExp.test(stringValue)){
        if(lengthWithoutSpaces(stringValue)<2){
            return false;
        }else{
            return true;
        }
    }else{
        return false;
    }
}

export function isValidPhoneNumber(stringValue) {
    if(validationConstants.telphoneNumberRegExp.test(stringValue)){
        return true;
    }else{
        return false;
    }
}

export function isValidNic(stringValue) {
    if(validationConstants.nicRegExp.test(stringValue)){
        return true;
    }else{
        return false;
    }
}

export function isValidNumberOnly(intValue){
    if(validationConstants.numOnlyRegExp.test(intValue)){
        return true;
    }else{
        return false;
    }
}

export function isValidTextAndNumbersOnly(stringValue) {
    if(stringValue==  null){
        return false;
    }

    if(validationConstants.textAndNumbersOnly.test(stringValue)){
        if(lengthWithoutSpaces(stringValue)<2){
            return false;
        }else{
            return true;
        }
    }else{
        return false;
    }
}

