export const patterns = {
  NAME: /^[A-Za-zА-Яа-яЁё0-9-\s]{1,30}$/,
  PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,22}$/,
  EMAIL: /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}
