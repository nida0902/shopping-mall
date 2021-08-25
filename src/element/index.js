import {
  Button,
  Form,
  FormItem,
  Input,
  Icon,
  Checkbox,
  Container,
  Aside,
  Main,
  Footer,
  Header,
  Divider,
  Dropdown,
  DropdownMenu,
  DropdownItem
} from 'element-ui'

export default {
  install(Vue) {
    Vue.use(Button)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Input)
    Vue.use(Icon)
    Vue.use(Checkbox)
    Vue.use(Container)
    Vue.use(Aside)
    Vue.use(Main)
    Vue.use(Footer)
    Vue.use(Header)
    Vue.use(Divider)
    Vue.use(Dropdown)
    Vue.use(DropdownMenu)
    Vue.use(DropdownItem)
  }
}
