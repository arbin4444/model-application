import { EuiGlobalToastList } from '@elastic/eui'
import React from 'react'

interface CommonToastProps {
    toasts : any;
    dismissToast : any;
    toastLifeTimeMs : number;


}


export const CommonToast:React.FC<CommonToastProps>=({
    toasts,
    dismissToast,
    toastLifeTimeMs,
})=>{
    return(
        <>
          <EuiGlobalToastList
            toasts={toasts}
            dismissToast={dismissToast}
            toastLifeTimeMs={toastLifeTimeMs}
          />
        </>
    )
}