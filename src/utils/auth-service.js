import { Amplify } from 'aws-amplify';
import { Auth } from 'aws-amplify';
import awsExports from '../aws-exports';

Amplify.configure(awsExports);

export const signUp = async (username, password, email) => {
  return Auth.signUp({
    username,
    password,
    attributes: {
      email,
    },
  });
};

export const confirmSignUp = async (username, code) => {
  return Auth.confirmSignUp(username, code);
};

export const signIn = async (username, password) => {
  return Auth.signIn(username, password);
};

export const signOut = async () => {
  return Auth.signOut();
};
