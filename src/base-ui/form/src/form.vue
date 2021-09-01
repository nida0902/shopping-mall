<template>
  <div class="my-form">
    <div class="header">
      <slot name="header" />
    </div>
    <el-form :label-width="labelWidth" :size="size">
      <el-row>
        <template v-for="item in formItems">
          <el-col :key="item.label" v-bind="colLayout">
            <el-form-item
              v-if="!formItems.isHidden"
              :label="item.label"
              :rules="item.rules"
            >
              <template v-if="item.type === 'input' || item.type === 'password'">
                <el-input
                  v-model="formData[item.field]"
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  @change="handleValueChange()"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  v-model="formData[item.field]"
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  @change="handleValueChange()"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                  >{{ option.title }}</el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-model="formData[item.field]"
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  @change="handleValueChange()"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  model: {
    prop: 'formData',
    event: 'update'
  },
  props: {
    labelWidth: {
      type: String,
      default: '100px'
    },
    formItems: {
      type: Array,
      default: () => []
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    },
    formData: {
      type: Object,
      required: true
    },
    size: {
      type: String,
      default: 'small'
    }
  },
  methods: {
    handleValueChange() {
      this.$emit('update', this.formData)
    }
  }
}
</script>

<style scoped lang="less">
.my-form {

  .footer {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
