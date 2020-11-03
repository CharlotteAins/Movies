import { useCallback, useState } from "react";

export const useToggle = ( initialValue: boolean = false ): any => {
  const [ flag, setFlag ] = useState( initialValue );

  //PATTERN: React Optimization Feature
  const toggle = useCallback( ( value?: boolean ) => {
    if ( value ) {
      setFlag( value );
    } else {
      setFlag( !flag );
    }
  }, [ flag ] );

  return [ flag, toggle ];
};
