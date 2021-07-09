export const analytics = [];


export const logAnalytics = (type, id) => {
  analytics.push(`${type}_${id}`);
}
