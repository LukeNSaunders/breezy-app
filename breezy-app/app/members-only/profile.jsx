
import { useUser } from '@auth0/nextjs-auth0/client';

export default function UserProfile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        <img src={user.picture} />
        <h2>{user.nickname}</h2>
        <p>{user.email}</p>
        <a href='/api/auth/logout'>LOGOUT</a>
      </div>
    );
  }

  return <a href='/api/auth/login'>LOGIN</a>;
}
