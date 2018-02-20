import slugify from 'slugify'

export const slugString = string => slugify(string, {
  replacement: '_',
  remove: /[$*_+~.()'"!\-:@\/]/g
})
