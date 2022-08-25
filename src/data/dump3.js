const photos = [
  {
    url: 'https://media.giphy.com/media/b21HcSrrBu8pi/giphy.gif',
    description:
      'Veniam et commodo labore laborum officia excepteur. Deserunt anim adipisicing fugiat do magna.',
  },
  {
    url: 'https://media.giphy.com/media/bi6RQ5x3tqoSI/giphy.gif',
    description:
      'Eu amet officia sint aliqua amet est consectetur labore eu anim cupidatat duis esse aliqua. Sint anim tempor irure ut voluptate enim anim tempor duis ut ipsum officia eu.',
  },
  {
    url: 'https://media.giphy.com/media/dG8sD1skMnPwI/giphy.gif',
    description:
      'Tempor aliquip excepteur pariatur sint deserunt. Commodo culpa cillum nostrud.',
  },
  {
    url: 'https://media.giphy.com/media/dKVw0JwmqjtMA/giphy.gif',
    description:
      'Dolor magna officia minim culpa esse aute veniam do sunt. Sit qui dolor pariatur mollit ad cillum anim consectetur veniam do mollit laboris ullamco nostrud et.',
  },
  {
    url: 'https://media.giphy.com/media/13TdMFTIORb9aU/giphy.gif',
    description:
      'Proident non deserunt magna voluptate consectetur cillum pariatur dolore sint tempor nostrud elit elit. Adipisicing est proident cillum minim quis Lorem eiusmod amet.',
  },
  {
    url: 'https://media.giphy.com/media/14kYBP3sOq3ubm/giphy.gif',
    description:
      'Ex adipisicing magna cupidatat excepteur adipisicing aute qui. Velit consectetur officia dolor elit minim aliqua est.',
  },
  {
    url: 'https://media.giphy.com/media/14mcoxkCUuoqsM/giphy.gif',
    description:
      'Duis nisi mollit ad deserunt occaecat culpa cillum et aute. Ipsum non mollit excepteur et dolore et do ut et exercitation.',
  },
  {
    url: 'https://media.giphy.com/media/1CRbewpGZtdEQ/giphy.gif',
    description:
      'In minim cillum amet dolor magna id qui sint aute consectetur id ullamco. Eu laboris aliquip minim reprehenderit pariatur ex est labore eiusmod do incididunt consequat.',
  },
  {
    url: 'https://media.giphy.com/media/1ErpEPbfK9ck0/giphy.gif',
    description:
      'Elit mollit quis ad commodo incididunt aliquip minim nulla pariatur Lorem fugiat. Cillum qui occaecat ea ex.',
  },
  {
    url: 'https://media.giphy.com/media/3TACspcXhhQPK/giphy.gif',
    description:
      'Nisi sunt exercitation occaecat dolore culpa veniam velit reprehenderit deserunt aliquip enim ullamco nulla mollit. Sunt pariatur tempor incididunt exercitation ut officia pariatur qui.',
  },
  {
    url: 'https://media.giphy.com/media/3o7bue6KjrDUzqhTJ6/giphy.gif',
    description:
      'Exercitation ut cupidatat ipsum sunt eu non commodo. Proident qui aliqua anim aute.',
  },
  {
    url: 'https://media.giphy.com/media/4MxLhxhOqCqYw/giphy.gif',
    description:
      'Culpa ullamco voluptate aliquip sit est sunt qui aute deserunt aliqua laboris. Elit qui ex est qui non.',
  },
  {
    url: 'https://media.giphy.com/media/4ilFRqgbzbx4c/giphy.gif',
    description:
      'Sit quis est voluptate exercitation. Exercitation dolore ullamco cillum.',
  },
  {
    url: 'https://media.giphy.com/media/5gK1hvwoutPnG/giphy.gif',
    description: 'Lorem quis esse ad. Amet anim sint labore.',
  },
  {
    url: 'https://media.giphy.com/media/7sRMjntXYEITu/giphy.gif',
    description:
      'Non proident dolor et nostrud sint qui ipsum culpa eiusmod aute. Ut amet est pariatur incididunt ullamco.',
  },
  {
    url: 'https://media.giphy.com/media/e9R0ytwguezTO/giphy.gif',
    description:
      'Commodo culpa est ullamco reprehenderit et ullamco aliqua ut et sint sunt. Sit nisi reprehenderit aliquip tempor aliquip esse nostrud veniam in aliqua.',
  },
  {
    url: 'https://media.giphy.com/media/euVwF4P2b0sus/giphy.gif',
    description:
      'Duis duis incididunt exercitation amet qui. Voluptate sint do nostrud ex labore cillum laboris voluptate ullamco cillum.',
  },
  {
    url: 'https://media.giphy.com/media/ffWzKK9eDPlCw/giphy.gif',
    description:
      'Cupidatat non cupidatat qui reprehenderit fugiat Lorem et minim enim laboris ipsum labore pariatur est. Irure dolore qui excepteur irure magna irure dolore incididunt est.',
  },
  {
    url: 'https://media.giphy.com/media/gQbVzXQQbGO7C/giphy.gif',
    description:
      'Cillum ipsum et irure. Qui anim aliquip magna sint laboris voluptate sunt est adipisicing est pariatur Lorem duis.',
  },
  {
    url: 'https://media.giphy.com/media/h4F1B5OmmoMi4/giphy.gif',
    description:
      'Duis id magna magna incididunt laborum consequat eu nisi in. Cillum incididunt ullamco deserunt ea do pariatur culpa est id.',
  },
  {
    url: 'https://media.giphy.com/media/iFW661Tf7Mp1e/giphy.gif',
    description:
      'Consectetur nisi est elit. Qui qui laboris id cillum esse laborum eu ad id aliqua voluptate.',
  },
  {
    url: 'https://media.giphy.com/media/iIkP9O94wiFlm/giphy.gif',
    description:
      'Ipsum proident veniam officia aliquip officia eu cillum exercitation aliqua labore. Occaecat proident consectetur qui.',
  },
  {
    url: 'https://media.giphy.com/media/irWbG2YwTDXR6/giphy.gif',
    description:
      'Magna occaecat aliquip nulla eu duis aliqua velit. Nisi ex duis consectetur quis labore consequat.',
  },
  {
    url: 'https://media.giphy.com/media/lmdWrAZEBB5TO/giphy.gif',
    description:
      'Voluptate officia nostrud esse irure magna ad laboris reprehenderit velit velit. Lorem dolor sit aliqua elit esse excepteur minim excepteur consectetur qui.',
  },
  {
    url: 'https://media.giphy.com/media/mZHOWmP9Sszm/giphy.gif',
    description:
      'Pariatur nisi eu ex in commodo deserunt. Duis sunt enim sunt mollit duis non.',
  },
];
export default photos;
