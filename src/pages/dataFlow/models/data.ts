// src/models/userModel.ts
import { useRequest } from '@umijs/max';
import { set } from 'lodash';
import { useState,
useCallback,
use
 } from 'react';
function getUser():Promise<{
  data:User
}> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('User data fetched');
      resolve({
        data:{ id: 2, name: 'John Doe ---' }
      });
    }, 1000);
  });
}

interface User {
  id: number;
  name: string;
}

export default function Page() {
  // const [user, setUser] = useState<User>({name:'dd',id:0});
 const [counter, setCounter] = useState(0);

  const increment = useCallback(() => setCounter((c) => c + 1), []);
  const decrement = useCallback(() => setCounter((c) => c - 1), []);
   const { data: user, loading: loading,run: getUserRun } = useRequest(getUser,{
    manual: true
   });
  return { counter, increment, decrement, user,getUserRun  };
};