# Antd Extended Select

This is an extension to Ant Design's [Select](https://ant.design/components/select/).<br>
You can add descriptions to each Option.

## Install
```
git clone git@github.com:daveedx/antd-extended-select.git
cd antd-extended-select.git
yarn install
yarn start
```

## Usage

```
const options = [
  {
    value: 'option1',
    title: 'Option 1',
    description: 'This is a description for Option 1',
    // here you can add any of the original props of Option:
    // https://ant.design/components/select/#Option-props
    label: 'Label for Option 1',
  },
  {
    value: 'option2',
    title: 'Option 2',
    description: 'This is a description for Option 2',
    // here you can add any of the original props of Option:
    // https://ant.design/components/select/#Option-props
    label: 'Label for Option 2',
  },
]

<AntdExtendedSelect
  options={options}
  // here you can add any of the original props of Select:
  // https://ant.design/components/select/#Select-props
  defaultValue="option2"
  style={{ width: 200 }}
/>
```

### Footnote
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app), wired with [React App Rewired](https://github.com/timarney/react-app-rewired) and its [LESS package](https://github.com/timarney/react-app-rewired/tree/master/packages/react-app-rewire-less).

More info about Create React App [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

### What is React App Rewired in nutshell
>Tweak the create-react-app webpack config(s) without using 'eject' and without creating a fork of the react-scripts.

>All the benefits of create-react-app without the limitations of "no config". You can add plugins, loaders whatever you need.

[More info](https://github.com/timarney/react-app-rewired)
