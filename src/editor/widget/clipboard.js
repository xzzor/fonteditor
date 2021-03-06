/**
 * @file 剪切板
 * @author mengke01(kekee000@gmail.com)
 */


define(
    function (require) {

        var storage = window.localStorage;

        var storageName = 'clipboard.default';

        var clipboard = {

            /**
             * 设置clipboard
             *
             * @param {Object} data 设置的数据
             * @param {string} type 数据类型
             */
            set: function (data, type) {
                storage.setItem(storageName, JSON.stringify({
                    type: type || -9999,
                    data: data
                }));
            },

            /**
             * 获取clipboard
             * @param {string} type 数据类型
             * @return {?Object}
             */
            get: function (type) {
                var data = storage.getItem(storageName);
                if (null !== data) {
                    data = JSON.parse(data);
                    if (data.type === type) {
                        // storage.removeItem(storageName);
                        return data.data;
                    }
                }

                return null;
            },

            /**
             * 清空
             */
            clear: function () {
                storage.removeItem(storageName);
            }
        };

        return clipboard;
    }
);
