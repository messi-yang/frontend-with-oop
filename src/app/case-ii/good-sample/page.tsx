'use client';

import { FormEventHandler, useCallback, useMemo, useState } from 'react';
import { AuthApi } from './auth-api';
import { AccessStorage } from './access-storage';

export default function Page() {
  const authApi = useMemo(() => AuthApi.new(), []);
  const accessStorage = useMemo(() => AccessStorage.new(), []);
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLoginSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault();

      const access = await authApi.sendLoginRequest(emailAddress, password);
      accessStorage.save(access);
    },
    [emailAddress, password]
  );

  return (
    <main>
      <form onSubmit={handleLoginSubmit}>
        <fieldset>
          <label>Email address</label>
          <input
            placeholder="Email address"
            onInput={(e) => {
              setEmailAddress(e.target.value);
            }}
          />
          <label>Password</label>
          <input
            placeholder="Password"
            onInput={(e) => {
              setPassword(e.target.value);
            }}
          />
        </fieldset>
        <button>Login</button>
      </form>
    </main>
  );
}
