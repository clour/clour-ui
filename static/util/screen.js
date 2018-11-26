/*
 *    Copyright (c) 2018-2025, clour All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * Neither the name of the clour.org developer nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 * Author: clour (slorys@hotmail.com)
 */

var screenUtil =(function(){
   function init(){
        var viewport = document.querySelector("meta[name=viewport]");
        var width=window.screen.width;
        var r=width/1200;
        if(r<1)viewport.setAttribute('content', 'width=device-width, initial-scale='+r+', maximum-scale=1, user-scalable=no');
   }
   return {
       init,
   }
})()
screenUtil.init();
