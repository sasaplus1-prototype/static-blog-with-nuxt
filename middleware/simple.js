export default async function(context) {
  context.something = 'test';

  const {
    yyyy: YYYY,
    mm: MM,
    dd: DD,
    no,
  } = context.route.params;

  //context.data = JSON.parse(
  //  fs.readFileSync(`~assets/${YYYY}/${MM}/${DD}/${no}.json`, 'utf8')
  //);
}
