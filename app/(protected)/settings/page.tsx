"use client";

import { useCurrentUser } from "@/hooks/use-current-user";

const SettingsPage = () => {
  const user = useCurrentUser();

  return (
    <div>
      <form>
        <button type="submit">Sign out</button>
      </form>
    </div>
  );
};

export default SettingsPage;
