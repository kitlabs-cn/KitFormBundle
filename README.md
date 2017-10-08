# KitFormBundle
FulltextType(UEditor, UMEditor), LaydateType

## Installation
 
### Step 1: Download the Bundle
---------------------------
 
Open a command console, enter your project directory and execute the
following command to download the latest stable version of this bundle:
 
	
	$ composer require kitlabs/kit-form-bundle "~0.1"

 
This command requires you to have Composer installed globally, as explained
in the [installation chapter](https://getcomposer.org/doc/00-intro.md)
of the Composer documentation.
 
### Step 2: Enable the Bundle
---------------------------
 
Then, enable the bundle by adding it to the list of registered bundles
in the `app/AppKernel.php` file of your project:

	<?php
	// app/AppKernel.php
	 
	// ...
	class AppKernel extends Kernel
	{
	    public function registerBundles()
	    {
	        $bundles = array(
	            // ...
	 
	            new Kit\KitFormBundle\KitFormBundle(),
	        );
	 
	        // ...
	    }
	 
	    // ...
	}

### Step 3: Configuration 

	# config.yml
	# Twig Configuration
	twig:
	    ...
	    form_themes:
	        - 'KitFormBundle:Form:kit_form_theme.html.twig'

## Usage
- LayDateType  
	引入laydate.js 或者 使用 layui 框架。

		<script src="{{ asset('public/laydate/laydate.js') }}"></script>

	buildForm进行使用：

		$builder-->add('start_time', LayDateType::class, [
            'label' => '开始时间',
            'type' => 'time'
        ])->add('end_time', LayDateType::class, [
            'label' => '结束时间',
            'type' => 'time'
        ]);

	| type可选值	| 名称 |	用途 |
	| :---: | :---:| :---: |
	| year | 年选择器  |	只提供年列表选择 |
	| month	| 年月选择器	| 只提供年、月选择 |
	| date	| 日期选择器	| 可选择：年、月、日。type默认值，一般可不填 |
	| time	| 时间选择器	| 只提供时、分、秒选择 |
	| datetime	| 日期时间选择器	| 可选择：年、月、日、时、分、秒 |


	PS: 详细配置请阅读[layDate官方文档](http://www.layui.com/laydate/)