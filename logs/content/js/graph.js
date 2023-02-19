/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 1189.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 0.0], [0.3, 0.0], [0.4, 0.0], [0.5, 0.0], [0.6, 0.0], [0.7, 0.0], [0.8, 0.0], [0.9, 0.0], [1.0, 0.0], [1.1, 0.0], [1.2, 0.0], [1.3, 0.0], [1.4, 0.0], [1.5, 0.0], [1.6, 0.0], [1.7, 0.0], [1.8, 0.0], [1.9, 0.0], [2.0, 0.0], [2.1, 0.0], [2.2, 0.0], [2.3, 0.0], [2.4, 0.0], [2.5, 0.0], [2.6, 0.0], [2.7, 0.0], [2.8, 0.0], [2.9, 0.0], [3.0, 0.0], [3.1, 0.0], [3.2, 0.0], [3.3, 0.0], [3.4, 0.0], [3.5, 0.0], [3.6, 0.0], [3.7, 0.0], [3.8, 0.0], [3.9, 0.0], [4.0, 0.0], [4.1, 0.0], [4.2, 0.0], [4.3, 0.0], [4.4, 0.0], [4.5, 453.0], [4.6, 453.0], [4.7, 453.0], [4.8, 453.0], [4.9, 453.0], [5.0, 453.0], [5.1, 453.0], [5.2, 453.0], [5.3, 453.0], [5.4, 461.0], [5.5, 461.0], [5.6, 461.0], [5.7, 461.0], [5.8, 461.0], [5.9, 461.0], [6.0, 461.0], [6.1, 461.0], [6.2, 473.0], [6.3, 473.0], [6.4, 473.0], [6.5, 473.0], [6.6, 473.0], [6.7, 473.0], [6.8, 473.0], [6.9, 473.0], [7.0, 473.0], [7.1, 484.0], [7.2, 484.0], [7.3, 484.0], [7.4, 484.0], [7.5, 484.0], [7.6, 484.0], [7.7, 484.0], [7.8, 484.0], [7.9, 484.0], [8.0, 484.0], [8.1, 484.0], [8.2, 484.0], [8.3, 484.0], [8.4, 484.0], [8.5, 484.0], [8.6, 484.0], [8.7, 484.0], [8.8, 484.0], [8.9, 486.0], [9.0, 486.0], [9.1, 486.0], [9.2, 486.0], [9.3, 486.0], [9.4, 486.0], [9.5, 486.0], [9.6, 486.0], [9.7, 486.0], [9.8, 490.0], [9.9, 490.0], [10.0, 490.0], [10.1, 490.0], [10.2, 490.0], [10.3, 490.0], [10.4, 490.0], [10.5, 490.0], [10.6, 490.0], [10.7, 490.0], [10.8, 490.0], [10.9, 490.0], [11.0, 490.0], [11.1, 490.0], [11.2, 490.0], [11.3, 490.0], [11.4, 490.0], [11.5, 490.0], [11.6, 499.0], [11.7, 499.0], [11.8, 499.0], [11.9, 499.0], [12.0, 499.0], [12.1, 499.0], [12.2, 499.0], [12.3, 499.0], [12.4, 499.0], [12.5, 499.0], [12.6, 499.0], [12.7, 499.0], [12.8, 499.0], [12.9, 499.0], [13.0, 499.0], [13.1, 499.0], [13.2, 499.0], [13.3, 501.0], [13.4, 501.0], [13.5, 501.0], [13.6, 501.0], [13.7, 501.0], [13.8, 501.0], [13.9, 501.0], [14.0, 501.0], [14.1, 501.0], [14.2, 501.0], [14.3, 501.0], [14.4, 501.0], [14.5, 501.0], [14.6, 501.0], [14.7, 501.0], [14.8, 501.0], [14.9, 501.0], [15.0, 501.0], [15.1, 503.0], [15.2, 503.0], [15.3, 503.0], [15.4, 503.0], [15.5, 503.0], [15.6, 503.0], [15.7, 503.0], [15.8, 503.0], [15.9, 503.0], [16.0, 503.0], [16.1, 503.0], [16.2, 503.0], [16.3, 503.0], [16.4, 503.0], [16.5, 503.0], [16.6, 503.0], [16.7, 503.0], [16.8, 503.0], [16.9, 504.0], [17.0, 504.0], [17.1, 504.0], [17.2, 504.0], [17.3, 504.0], [17.4, 504.0], [17.5, 504.0], [17.6, 504.0], [17.7, 504.0], [17.8, 504.0], [17.9, 504.0], [18.0, 504.0], [18.1, 504.0], [18.2, 504.0], [18.3, 504.0], [18.4, 504.0], [18.5, 504.0], [18.6, 504.0], [18.7, 504.0], [18.8, 504.0], [18.9, 504.0], [19.0, 504.0], [19.1, 504.0], [19.2, 504.0], [19.3, 504.0], [19.4, 504.0], [19.5, 504.0], [19.6, 504.0], [19.7, 504.0], [19.8, 504.0], [19.9, 504.0], [20.0, 504.0], [20.1, 504.0], [20.2, 504.0], [20.3, 504.0], [20.4, 506.0], [20.5, 506.0], [20.6, 506.0], [20.7, 506.0], [20.8, 506.0], [20.9, 506.0], [21.0, 506.0], [21.1, 506.0], [21.2, 506.0], [21.3, 506.0], [21.4, 506.0], [21.5, 506.0], [21.6, 506.0], [21.7, 506.0], [21.8, 506.0], [21.9, 506.0], [22.0, 506.0], [22.1, 506.0], [22.2, 506.0], [22.3, 506.0], [22.4, 506.0], [22.5, 506.0], [22.6, 506.0], [22.7, 506.0], [22.8, 506.0], [22.9, 506.0], [23.0, 506.0], [23.1, 506.0], [23.2, 506.0], [23.3, 506.0], [23.4, 506.0], [23.5, 506.0], [23.6, 506.0], [23.7, 506.0], [23.8, 506.0], [23.9, 509.0], [24.0, 509.0], [24.1, 509.0], [24.2, 509.0], [24.3, 509.0], [24.4, 509.0], [24.5, 509.0], [24.6, 509.0], [24.7, 509.0], [24.8, 509.0], [24.9, 509.0], [25.0, 509.0], [25.1, 509.0], [25.2, 509.0], [25.3, 509.0], [25.4, 509.0], [25.5, 509.0], [25.6, 509.0], [25.7, 512.0], [25.8, 512.0], [25.9, 512.0], [26.0, 512.0], [26.1, 512.0], [26.2, 512.0], [26.3, 512.0], [26.4, 512.0], [26.5, 512.0], [26.6, 512.0], [26.7, 512.0], [26.8, 512.0], [26.9, 512.0], [27.0, 512.0], [27.1, 512.0], [27.2, 512.0], [27.3, 512.0], [27.4, 512.0], [27.5, 514.0], [27.6, 514.0], [27.7, 514.0], [27.8, 514.0], [27.9, 514.0], [28.0, 514.0], [28.1, 514.0], [28.2, 514.0], [28.3, 514.0], [28.4, 514.0], [28.5, 514.0], [28.6, 514.0], [28.7, 514.0], [28.8, 514.0], [28.9, 514.0], [29.0, 514.0], [29.1, 514.0], [29.2, 514.0], [29.3, 517.0], [29.4, 517.0], [29.5, 517.0], [29.6, 517.0], [29.7, 517.0], [29.8, 517.0], [29.9, 517.0], [30.0, 517.0], [30.1, 517.0], [30.2, 517.0], [30.3, 517.0], [30.4, 517.0], [30.5, 517.0], [30.6, 517.0], [30.7, 517.0], [30.8, 517.0], [30.9, 517.0], [31.0, 518.0], [31.1, 518.0], [31.2, 518.0], [31.3, 518.0], [31.4, 518.0], [31.5, 518.0], [31.6, 518.0], [31.7, 518.0], [31.8, 518.0], [31.9, 518.0], [32.0, 518.0], [32.1, 518.0], [32.2, 518.0], [32.3, 518.0], [32.4, 518.0], [32.5, 518.0], [32.6, 518.0], [32.7, 518.0], [32.8, 519.0], [32.9, 519.0], [33.0, 519.0], [33.1, 519.0], [33.2, 519.0], [33.3, 519.0], [33.4, 519.0], [33.5, 519.0], [33.6, 519.0], [33.7, 519.0], [33.8, 519.0], [33.9, 519.0], [34.0, 519.0], [34.1, 519.0], [34.2, 519.0], [34.3, 519.0], [34.4, 519.0], [34.5, 519.0], [34.6, 520.0], [34.7, 520.0], [34.8, 520.0], [34.9, 520.0], [35.0, 520.0], [35.1, 520.0], [35.2, 520.0], [35.3, 520.0], [35.4, 520.0], [35.5, 520.0], [35.6, 520.0], [35.7, 520.0], [35.8, 520.0], [35.9, 520.0], [36.0, 520.0], [36.1, 520.0], [36.2, 520.0], [36.3, 521.0], [36.4, 521.0], [36.5, 521.0], [36.6, 521.0], [36.7, 521.0], [36.8, 521.0], [36.9, 521.0], [37.0, 521.0], [37.1, 521.0], [37.2, 521.0], [37.3, 521.0], [37.4, 521.0], [37.5, 521.0], [37.6, 521.0], [37.7, 521.0], [37.8, 521.0], [37.9, 521.0], [38.0, 521.0], [38.1, 522.0], [38.2, 522.0], [38.3, 522.0], [38.4, 522.0], [38.5, 522.0], [38.6, 522.0], [38.7, 522.0], [38.8, 522.0], [38.9, 522.0], [39.0, 522.0], [39.1, 522.0], [39.2, 522.0], [39.3, 522.0], [39.4, 522.0], [39.5, 522.0], [39.6, 522.0], [39.7, 522.0], [39.8, 522.0], [39.9, 522.0], [40.0, 522.0], [40.1, 522.0], [40.2, 522.0], [40.3, 522.0], [40.4, 522.0], [40.5, 522.0], [40.6, 522.0], [40.7, 522.0], [40.8, 523.0], [40.9, 523.0], [41.0, 523.0], [41.1, 523.0], [41.2, 523.0], [41.3, 523.0], [41.4, 523.0], [41.5, 523.0], [41.6, 523.0], [41.7, 523.0], [41.8, 523.0], [41.9, 523.0], [42.0, 523.0], [42.1, 523.0], [42.2, 523.0], [42.3, 523.0], [42.4, 523.0], [42.5, 523.0], [42.6, 523.0], [42.7, 523.0], [42.8, 523.0], [42.9, 523.0], [43.0, 523.0], [43.1, 523.0], [43.2, 523.0], [43.3, 523.0], [43.4, 523.0], [43.5, 523.0], [43.6, 523.0], [43.7, 523.0], [43.8, 523.0], [43.9, 523.0], [44.0, 523.0], [44.1, 523.0], [44.2, 523.0], [44.3, 523.0], [44.4, 523.0], [44.5, 523.0], [44.6, 523.0], [44.7, 523.0], [44.8, 523.0], [44.9, 523.0], [45.0, 523.0], [45.1, 523.0], [45.2, 524.0], [45.3, 524.0], [45.4, 524.0], [45.5, 524.0], [45.6, 524.0], [45.7, 524.0], [45.8, 524.0], [45.9, 524.0], [46.0, 524.0], [46.1, 524.0], [46.2, 524.0], [46.3, 524.0], [46.4, 524.0], [46.5, 524.0], [46.6, 524.0], [46.7, 524.0], [46.8, 524.0], [46.9, 524.0], [47.0, 527.0], [47.1, 527.0], [47.2, 527.0], [47.3, 527.0], [47.4, 527.0], [47.5, 527.0], [47.6, 527.0], [47.7, 527.0], [47.8, 527.0], [47.9, 527.0], [48.0, 527.0], [48.1, 527.0], [48.2, 527.0], [48.3, 527.0], [48.4, 527.0], [48.5, 527.0], [48.6, 527.0], [48.7, 529.0], [48.8, 529.0], [48.9, 529.0], [49.0, 529.0], [49.1, 529.0], [49.2, 529.0], [49.3, 529.0], [49.4, 529.0], [49.5, 529.0], [49.6, 529.0], [49.7, 529.0], [49.8, 529.0], [49.9, 529.0], [50.0, 529.0], [50.1, 529.0], [50.2, 529.0], [50.3, 529.0], [50.4, 529.0], [50.5, 529.0], [50.6, 529.0], [50.7, 529.0], [50.8, 529.0], [50.9, 529.0], [51.0, 529.0], [51.1, 529.0], [51.2, 529.0], [51.3, 529.0], [51.4, 529.0], [51.5, 529.0], [51.6, 529.0], [51.7, 529.0], [51.8, 529.0], [51.9, 529.0], [52.0, 529.0], [52.1, 529.0], [52.2, 529.0], [52.3, 534.0], [52.4, 534.0], [52.5, 534.0], [52.6, 534.0], [52.7, 534.0], [52.8, 534.0], [52.9, 534.0], [53.0, 534.0], [53.1, 534.0], [53.2, 534.0], [53.3, 534.0], [53.4, 534.0], [53.5, 534.0], [53.6, 534.0], [53.7, 534.0], [53.8, 534.0], [53.9, 534.0], [54.0, 536.0], [54.1, 536.0], [54.2, 536.0], [54.3, 536.0], [54.4, 536.0], [54.5, 536.0], [54.6, 536.0], [54.7, 536.0], [54.8, 536.0], [54.9, 536.0], [55.0, 536.0], [55.1, 536.0], [55.2, 536.0], [55.3, 536.0], [55.4, 536.0], [55.5, 536.0], [55.6, 536.0], [55.7, 536.0], [55.8, 542.0], [55.9, 542.0], [56.0, 542.0], [56.1, 542.0], [56.2, 542.0], [56.3, 542.0], [56.4, 542.0], [56.5, 542.0], [56.6, 542.0], [56.7, 544.0], [56.8, 544.0], [56.9, 544.0], [57.0, 544.0], [57.1, 544.0], [57.2, 544.0], [57.3, 544.0], [57.4, 544.0], [57.5, 544.0], [57.6, 544.0], [57.7, 544.0], [57.8, 544.0], [57.9, 544.0], [58.0, 544.0], [58.1, 544.0], [58.2, 544.0], [58.3, 544.0], [58.4, 544.0], [58.5, 546.0], [58.6, 546.0], [58.7, 546.0], [58.8, 546.0], [58.9, 546.0], [59.0, 546.0], [59.1, 546.0], [59.2, 546.0], [59.3, 546.0], [59.4, 546.0], [59.5, 546.0], [59.6, 546.0], [59.7, 546.0], [59.8, 546.0], [59.9, 546.0], [60.0, 546.0], [60.1, 546.0], [60.2, 548.0], [60.3, 548.0], [60.4, 548.0], [60.5, 548.0], [60.6, 548.0], [60.7, 548.0], [60.8, 548.0], [60.9, 548.0], [61.0, 548.0], [61.1, 548.0], [61.2, 548.0], [61.3, 548.0], [61.4, 548.0], [61.5, 548.0], [61.6, 548.0], [61.7, 548.0], [61.8, 548.0], [61.9, 548.0], [62.0, 548.0], [62.1, 548.0], [62.2, 548.0], [62.3, 548.0], [62.4, 548.0], [62.5, 548.0], [62.6, 548.0], [62.7, 548.0], [62.8, 548.0], [62.9, 550.0], [63.0, 550.0], [63.1, 550.0], [63.2, 550.0], [63.3, 550.0], [63.4, 550.0], [63.5, 550.0], [63.6, 550.0], [63.7, 550.0], [63.8, 550.0], [63.9, 550.0], [64.0, 550.0], [64.1, 550.0], [64.2, 550.0], [64.3, 550.0], [64.4, 550.0], [64.5, 550.0], [64.6, 550.0], [64.7, 552.0], [64.8, 552.0], [64.9, 552.0], [65.0, 552.0], [65.1, 552.0], [65.2, 552.0], [65.3, 552.0], [65.4, 552.0], [65.5, 552.0], [65.6, 552.0], [65.7, 552.0], [65.8, 552.0], [65.9, 552.0], [66.0, 552.0], [66.1, 552.0], [66.2, 552.0], [66.3, 552.0], [66.4, 552.0], [66.5, 552.0], [66.6, 552.0], [66.7, 552.0], [66.8, 552.0], [66.9, 552.0], [67.0, 552.0], [67.1, 552.0], [67.2, 552.0], [67.3, 552.0], [67.4, 552.0], [67.5, 552.0], [67.6, 552.0], [67.7, 552.0], [67.8, 552.0], [67.9, 552.0], [68.0, 552.0], [68.1, 552.0], [68.2, 555.0], [68.3, 555.0], [68.4, 555.0], [68.5, 555.0], [68.6, 555.0], [68.7, 555.0], [68.8, 555.0], [68.9, 555.0], [69.0, 555.0], [69.1, 555.0], [69.2, 555.0], [69.3, 555.0], [69.4, 555.0], [69.5, 555.0], [69.6, 555.0], [69.7, 555.0], [69.8, 555.0], [69.9, 555.0], [70.0, 561.0], [70.1, 561.0], [70.2, 561.0], [70.3, 561.0], [70.4, 561.0], [70.5, 561.0], [70.6, 561.0], [70.7, 561.0], [70.8, 561.0], [70.9, 561.0], [71.0, 561.0], [71.1, 561.0], [71.2, 561.0], [71.3, 561.0], [71.4, 561.0], [71.5, 561.0], [71.6, 561.0], [71.7, 566.0], [71.8, 566.0], [71.9, 566.0], [72.0, 566.0], [72.1, 566.0], [72.2, 566.0], [72.3, 566.0], [72.4, 566.0], [72.5, 566.0], [72.6, 566.0], [72.7, 566.0], [72.8, 566.0], [72.9, 566.0], [73.0, 566.0], [73.1, 566.0], [73.2, 566.0], [73.3, 566.0], [73.4, 566.0], [73.5, 587.0], [73.6, 587.0], [73.7, 587.0], [73.8, 587.0], [73.9, 587.0], [74.0, 587.0], [74.1, 587.0], [74.2, 587.0], [74.3, 587.0], [74.4, 587.0], [74.5, 587.0], [74.6, 587.0], [74.7, 587.0], [74.8, 587.0], [74.9, 587.0], [75.0, 587.0], [75.1, 587.0], [75.2, 587.0], [75.3, 655.0], [75.4, 655.0], [75.5, 655.0], [75.6, 655.0], [75.7, 655.0], [75.8, 655.0], [75.9, 655.0], [76.0, 655.0], [76.1, 655.0], [76.2, 655.0], [76.3, 655.0], [76.4, 655.0], [76.5, 655.0], [76.6, 655.0], [76.7, 655.0], [76.8, 655.0], [76.9, 655.0], [77.0, 690.0], [77.1, 690.0], [77.2, 690.0], [77.3, 690.0], [77.4, 690.0], [77.5, 690.0], [77.6, 690.0], [77.7, 690.0], [77.8, 690.0], [77.9, 690.0], [78.0, 690.0], [78.1, 690.0], [78.2, 690.0], [78.3, 690.0], [78.4, 690.0], [78.5, 690.0], [78.6, 690.0], [78.7, 690.0], [78.8, 724.0], [78.9, 724.0], [79.0, 724.0], [79.1, 724.0], [79.2, 724.0], [79.3, 724.0], [79.4, 724.0], [79.5, 724.0], [79.6, 724.0], [79.7, 724.0], [79.8, 724.0], [79.9, 724.0], [80.0, 724.0], [80.1, 724.0], [80.2, 724.0], [80.3, 724.0], [80.4, 724.0], [80.5, 724.0], [80.6, 733.0], [80.7, 733.0], [80.8, 733.0], [80.9, 733.0], [81.0, 733.0], [81.1, 733.0], [81.2, 733.0], [81.3, 733.0], [81.4, 733.0], [81.5, 733.0], [81.6, 733.0], [81.7, 733.0], [81.8, 733.0], [81.9, 733.0], [82.0, 733.0], [82.1, 733.0], [82.2, 733.0], [82.3, 733.0], [82.4, 749.0], [82.5, 749.0], [82.6, 749.0], [82.7, 749.0], [82.8, 749.0], [82.9, 749.0], [83.0, 749.0], [83.1, 749.0], [83.2, 749.0], [83.3, 749.0], [83.4, 749.0], [83.5, 749.0], [83.6, 749.0], [83.7, 749.0], [83.8, 749.0], [83.9, 749.0], [84.0, 749.0], [84.1, 756.0], [84.2, 756.0], [84.3, 756.0], [84.4, 756.0], [84.5, 756.0], [84.6, 756.0], [84.7, 756.0], [84.8, 756.0], [84.9, 756.0], [85.0, 756.0], [85.1, 756.0], [85.2, 756.0], [85.3, 756.0], [85.4, 756.0], [85.5, 756.0], [85.6, 756.0], [85.7, 756.0], [85.8, 756.0], [85.9, 786.0], [86.0, 786.0], [86.1, 786.0], [86.2, 786.0], [86.3, 786.0], [86.4, 786.0], [86.5, 786.0], [86.6, 786.0], [86.7, 786.0], [86.8, 786.0], [86.9, 786.0], [87.0, 786.0], [87.1, 786.0], [87.2, 786.0], [87.3, 786.0], [87.4, 786.0], [87.5, 786.0], [87.6, 786.0], [87.7, 791.0], [87.8, 791.0], [87.9, 791.0], [88.0, 791.0], [88.1, 791.0], [88.2, 791.0], [88.3, 791.0], [88.4, 791.0], [88.5, 791.0], [88.6, 791.0], [88.7, 791.0], [88.8, 791.0], [88.9, 791.0], [89.0, 791.0], [89.1, 791.0], [89.2, 791.0], [89.3, 791.0], [89.4, 804.0], [89.5, 804.0], [89.6, 804.0], [89.7, 804.0], [89.8, 804.0], [89.9, 804.0], [90.0, 804.0], [90.1, 804.0], [90.2, 804.0], [90.3, 826.0], [90.4, 826.0], [90.5, 826.0], [90.6, 826.0], [90.7, 826.0], [90.8, 826.0], [90.9, 826.0], [91.0, 826.0], [91.1, 826.0], [91.2, 826.0], [91.3, 826.0], [91.4, 826.0], [91.5, 826.0], [91.6, 826.0], [91.7, 826.0], [91.8, 826.0], [91.9, 826.0], [92.0, 826.0], [92.1, 826.0], [92.2, 826.0], [92.3, 826.0], [92.4, 826.0], [92.5, 826.0], [92.6, 826.0], [92.7, 826.0], [92.8, 826.0], [92.9, 826.0], [93.0, 826.0], [93.1, 826.0], [93.2, 826.0], [93.3, 826.0], [93.4, 826.0], [93.5, 826.0], [93.6, 826.0], [93.7, 826.0], [93.8, 826.0], [93.9, 845.0], [94.0, 845.0], [94.1, 845.0], [94.2, 845.0], [94.3, 845.0], [94.4, 845.0], [94.5, 845.0], [94.6, 845.0], [94.7, 995.0], [94.8, 995.0], [94.9, 995.0], [95.0, 995.0], [95.1, 995.0], [95.2, 995.0], [95.3, 995.0], [95.4, 995.0], [95.5, 995.0], [95.6, 995.0], [95.7, 995.0], [95.8, 995.0], [95.9, 995.0], [96.0, 995.0], [96.1, 995.0], [96.2, 995.0], [96.3, 995.0], [96.4, 995.0], [96.5, 1153.0], [96.6, 1153.0], [96.7, 1153.0], [96.8, 1153.0], [96.9, 1153.0], [97.0, 1153.0], [97.1, 1153.0], [97.2, 1153.0], [97.3, 1153.0], [97.4, 1153.0], [97.5, 1153.0], [97.6, 1153.0], [97.7, 1153.0], [97.8, 1153.0], [97.9, 1153.0], [98.0, 1153.0], [98.1, 1153.0], [98.2, 1153.0], [98.3, 1189.0], [98.4, 1189.0], [98.5, 1189.0], [98.6, 1189.0], [98.7, 1189.0], [98.8, 1189.0], [98.9, 1189.0], [99.0, 1189.0], [99.1, 1189.0], [99.2, 1189.0], [99.3, 1189.0], [99.4, 1189.0], [99.5, 1189.0], [99.6, 1189.0], [99.7, 1189.0], [99.8, 1189.0], [99.9, 1189.0], [100.0, 1189.0]], "isOverall": false, "label": "GET Category Details", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 70.0, "series": [{"data": [[0.0, 5.0], [1100.0, 4.0], [600.0, 4.0], [700.0, 12.0], [800.0, 6.0], [400.0, 10.0], [900.0, 2.0], [500.0, 70.0]], "isOverall": false, "label": "GET Category Details", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 46.0, "series": [{"data": [[0.0, 3.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 46.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 5.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.67682252E12, "maxY": 5.0, "series": [{"data": [[1.67682282E12, 0.0]], "isOverall": false, "label": "", "isController": false}, {"data": [[1.6768227E12, 5.0], [1.67682252E12, 4.052631578947368], [1.67682282E12, 3.111111111111111], [1.67682264E12, 5.0], [1.67682276E12, 4.8500000000000005], [1.67682258E12, 5.0]], "isOverall": false, "label": "assurity api call", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67682282E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 836.0, "series": [{"data": [[2.0, 836.0], [4.0, 628.5], [0.0, 0.0], [1.0, 514.0], [5.0, 587.6521739130433], [3.0, 662.75]], "isOverall": false, "label": "GET Category Details", "isController": false}, {"data": [[4.442477876106195, 577.6371681415928]], "isOverall": false, "label": "GET Category Details-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 63.81666666666667, "minX": 1.67682252E12, "maxY": 475.93333333333334, "series": [{"data": [[1.6768227E12, 475.85], [1.67682252E12, 314.76666666666665], [1.67682282E12, 355.15], [1.67682264E12, 475.85], [1.67682276E12, 475.85], [1.67682258E12, 475.93333333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6768227E12, 91.16666666666667], [1.67682252E12, 63.81666666666667], [1.67682282E12, 63.81666666666667], [1.67682264E12, 91.16666666666667], [1.67682276E12, 91.16666666666667], [1.67682258E12, 91.16666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67682282E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 354.8571428571429, "minX": 1.67682252E12, "maxY": 742.1052631578947, "series": [{"data": [[1.6768227E12, 563.6], [1.67682252E12, 742.1052631578947], [1.67682282E12, 354.8571428571429], [1.67682264E12, 574.95], [1.67682276E12, 573.95], [1.67682258E12, 597.75]], "isOverall": false, "label": "GET Category Details", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67682282E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 353.42857142857144, "minX": 1.67682252E12, "maxY": 732.8421052631579, "series": [{"data": [[1.6768227E12, 556.15], [1.67682252E12, 732.8421052631579], [1.67682282E12, 353.42857142857144], [1.67682264E12, 572.4], [1.67682276E12, 566.45], [1.67682258E12, 593.5]], "isOverall": false, "label": "GET Category Details", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67682282E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 14.214285714285714, "minX": 1.67682252E12, "maxY": 64.10526315789473, "series": [{"data": [[1.6768227E12, 30.04999999999999], [1.67682252E12, 64.10526315789473], [1.67682282E12, 14.214285714285714], [1.67682264E12, 28.9], [1.67682276E12, 51.4], [1.67682258E12, 32.2]], "isOverall": false, "label": "GET Category Details", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67682282E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 484.0, "minX": 1.67682252E12, "maxY": 1189.0, "series": [{"data": [[1.6768227E12, 826.0], [1.67682252E12, 1153.0], [1.67682282E12, 791.0], [1.67682264E12, 1189.0], [1.67682276E12, 756.0], [1.67682258E12, 749.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6768227E12, 826.0], [1.67682252E12, 1153.0], [1.67682282E12, 791.0], [1.67682264E12, 1189.0], [1.67682276E12, 756.0], [1.67682258E12, 749.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6768227E12, 826.0], [1.67682252E12, 1153.0], [1.67682282E12, 791.0], [1.67682264E12, 1189.0], [1.67682276E12, 756.0], [1.67682258E12, 749.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6768227E12, 826.0], [1.67682252E12, 1153.0], [1.67682282E12, 791.0], [1.67682264E12, 1189.0], [1.67682276E12, 756.0], [1.67682258E12, 749.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6768227E12, 506.0], [1.67682252E12, 561.0], [1.67682282E12, 501.0], [1.67682264E12, 484.0], [1.67682276E12, 503.0], [1.67682258E12, 504.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6768227E12, 534.0], [1.67682252E12, 779.5], [1.67682282E12, 524.0], [1.67682264E12, 522.0], [1.67682276E12, 544.0], [1.67682258E12, 512.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67682282E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 522.0, "minX": 1.0, "maxY": 910.5, "series": [{"data": [[2.0, 910.5], [1.0, 529.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 522.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 521.0, "minX": 1.0, "maxY": 880.5, "series": [{"data": [[2.0, 880.5], [1.0, 524.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 521.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.67682252E12, "maxY": 0.16666666666666666, "series": [{"data": [[1.6768227E12, 0.16666666666666666], [1.67682252E12, 0.11666666666666667], [1.67682282E12, 0.11666666666666667], [1.67682264E12, 0.16666666666666666], [1.67682276E12, 0.16666666666666666], [1.67682258E12, 0.16666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67682282E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.67682252E12, "maxY": 0.16666666666666666, "series": [{"data": [[1.6768227E12, 0.16666666666666666], [1.67682252E12, 0.11666666666666667], [1.67682282E12, 0.11666666666666667], [1.67682264E12, 0.16666666666666666], [1.67682276E12, 0.16666666666666666], [1.67682258E12, 0.16666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.67682282E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.67682252E12, "maxY": 0.3, "series": [{"data": [[1.6768227E12, 0.3], [1.67682252E12, 0.2833333333333333], [1.67682282E12, 0.23333333333333334], [1.67682264E12, 0.3], [1.67682276E12, 0.3], [1.67682258E12, 0.3]], "isOverall": false, "label": "GET Category Details-success", "isController": false}, {"data": [[1.6768227E12, 0.03333333333333333], [1.67682252E12, 0.03333333333333333], [1.67682264E12, 0.03333333333333333], [1.67682276E12, 0.03333333333333333], [1.67682258E12, 0.03333333333333333]], "isOverall": false, "label": "GET Category Details-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67682282E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.67682252E12, "maxY": 0.3, "series": [{"data": [[1.6768227E12, 0.3], [1.67682252E12, 0.2833333333333333], [1.67682282E12, 0.23333333333333334], [1.67682264E12, 0.3], [1.67682276E12, 0.3], [1.67682258E12, 0.3]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6768227E12, 0.03333333333333333], [1.67682252E12, 0.03333333333333333], [1.67682264E12, 0.03333333333333333], [1.67682276E12, 0.03333333333333333], [1.67682258E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.67682282E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

