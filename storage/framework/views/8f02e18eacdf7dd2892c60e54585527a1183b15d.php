<html lang="vi">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Customer</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="<?php echo e(asset('vue_api/custom.css')); ?>">
    </head>
    <body>
        <div class="container" id="app">
            <div class="content">
                <div class="filter">
                    <input type="text" name="">
                    <div style="float: right;">
                        <label>Something</label>
                        <select>
                            <option></option>
                        </select>
                        <select>
                            <option></option>
                        </select>
                        <a href="" class="btn">Filter</a>
                    </div>
                </div>
                <table_component></table_component>
              
            </div>
        </div>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script type="text/javascript" src="https://unpkg.com/vue@2.3.3"></script>
        <script type="text/javascript" src="<?php echo e(asset('vue_api/modal.js')); ?>"></script>
        <script type="text/javascript" src="<?php echo e(asset('vue_api/table.js')); ?>"></script>
        <script type="text/javascript" src="<?php echo e(asset('vue_api/filter.js')); ?>"></script>
        <script type="text/javascript" src="<?php echo e(asset('vue_api/app.js')); ?>"></script>
    </body>
</html>