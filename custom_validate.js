/*
使用ant design vue组件库的时候 form表单自定义校验规则.
实时检测输入的任务名称 后台数据库是否已经存在.
*/
<template>
    <div>
        <a-form @submit="handleSubmit" :form="form" layout="inline">
            <a-form-item label="任务名称 ">
                <a-input
                    type="text"
                    :style="{width: '300px'}"
                    placeholder="任务名称"
                    v-decorator="[
                        'taskName', {
                            rules: rules.taskNameRules,
                            initialValue: null,
                        }
                    ]"
                >
                </a-input>
            </a-form-item>
        </a-form>
    </div>
</template>

export default {
    name: '',
    data() {
      const validateExists = (rule, value, callback) => {
        this.checkIfExists()(value, (result) => {
          // global.console.log(`是否存在${result}`);
          if (result) {
            callback('任务名已存在');
          }
        });
      };
      return {
        form: this.$form.createForm(this, { name: '' }),
        rules: {
          taskNameRules: [
            { required: true, message: '请输入任务名称' },
            { trigger: 'change', validator: validateExists },
          ],
        },
      };
    },
    methods: {
        checkIfExists() {
          return (taskName, callback) => {
            axios.post(`${api}/check`, this.$qs.stringify({ taskName })).then((res) => {
              if (res.data.success && res.data.data) {
                if (typeof callback === 'function') {
                  callback.call(window, res.data.data);
                }
              }
            });
          };
        },
    }
}