export default function templateOneCountry(params) {
  console.log(params);
  const { capital, population, flags, languages } = params[0];
  console.dir(capital);
  console.log(population);
  console.log(flags);
  console.log(languages);
}
