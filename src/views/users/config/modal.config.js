export const modalConfig = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'auth',
      type: 'select',
      label: '用户权限',
      placeholder: '请选择用户权限',
      options: [
        { title: '管理员', value: 1 },
        { title: '一般用户', value: 0 }
      ]
    }
  ],
  colLayout: { span: 24 }
}
