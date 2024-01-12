import axios from 'axios';

export const sendNotification = async (
  token: string,
  title: string,
  body: string,
) => {
  try {
    const result = await axios.post(`https://api.expo.dev/v2/push/send`, {
      to: token,
      title: title,
      body: body,
    });

    return result;
    // console.log('send', token);
  } catch (err) {
    console.log(err);
  }
};
