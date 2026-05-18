// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://forewillow.github.io', 
    // 2. 填入你的仓库名称（注意前后都有斜杠）
    // 如果你的仓库名就叫 forewillow.github.io，这里可以写 '/'
    base: '/',
	integrations: [
		starlight({
			title: '个人学习记录',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/forewillow' }],

			sidebar: [
				{
				label: '本站简介', // 侧边栏显示的第一个大分类
				autogenerate: { directory: 'intro' }, // 自动把这个文件夹里的所有 md 塞进来
				},
				{
				label: '每月一张专辑', // 侧边栏显示的第二个大分类
				autogenerate: { directory: 'music' }, 
				},
				{
				label: '水面渲染学习', // 侧边栏显示的第二个大分类
				autogenerate: { directory: 'water' }, 
				},
			],
 
		}),
	],
});
