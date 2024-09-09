
export const login = (credentials, navigate) => async (dispatch) => {
  try {
   
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.password,
      }),
    });

    const data = await response.json();

    
    if (credentials.username === 'emilys' && credentials.password === 'emilyspass') {
      dispatch({ type: 'LOGIN_SUCCESS', payload: data });
      navigate('/dashboard');
    } else {
      dispatch({ type: 'LOGIN_FAILURE', payload: 'Invalid username or password' });
    }
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
  }
};

export const signup = (userData, navigate) => async (dispatch) => {
  try {
    const response = await fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: 'SIGNUP_SUCCESS', payload: data });
      navigate('/dashboard');
    } else {
      dispatch({ type: 'SIGNUP_FAILURE', payload: data.message });
    }
  } catch (error) {
    dispatch({ type: 'SIGNUP_FAILURE', payload: error.message });
  }
};

export const logout = () => ({
  type: 'LOGOUT',
});
