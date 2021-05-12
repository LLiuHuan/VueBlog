// import type {App} from 'vue'
// import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
// import '@/styles/element-variables.scss'
import {
    ElButton,
    ElMessage,
    ElImage,
    ElDivider,
    ElContainer,
    ElAside,
    ElMain,
    ElFooter,
    ElRow,
    ElCol
} from 'element-plus'

// import {useStore} from '@/store'

export default function setupElement(app: any) {
    // app.use(ElementPlus, { size: useStore().state.app.size })

    app.component(ElButton.name, ElButton);
    app.component(ElImage.name, ElImage);
    app.component(ElDivider.name, ElDivider);
    app.component(ElContainer.name, ElContainer);
    app.component(ElAside.name, ElAside);
    app.component(ElMain.name, ElMain);
    app.component(ElFooter.name, ElFooter);
    app.component(ElRow.name, ElRow);
    app.component(ElCol.name, ElCol);

    app.config.globalProperties.$message = ElMessage
}
