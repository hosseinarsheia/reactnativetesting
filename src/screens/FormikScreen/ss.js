import * as yup from 'yup';

yup.addMethod(yup.string, 'nationalCode', function (arg) {
  console.log('arg', arg);
  // const { message } = anyArgsYouNeed;
  return this.test('nattionalCodeValidation', '', function (value) {
    const { path, createError } = this;
    console.log('value', value);

    if (value?.length === 5) {
      return createError({ path, message: 'nationalCode length is 5' });
    } else if (value?.length === 3) {
      return createError({ path, message: 'nationalCode length is 3' });
    }
  });
});
