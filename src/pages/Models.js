import React, { useEffect, useState } from "react";
import NavigationBreadcrumbs from "../components/layout/Breadcrumbs";
import ContentsTitle from "../components/layout/ContentsTitle";
import ContentsContainer, {
  PageContainer,
} from "../components/layout/ContentsContainer";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Models = () => {
  const [data, setData] = useState(
    (function () {
      // generate an array of random data
      var data = [],
        time = new Date().getTime(),
        i;

      for (i = -19; i <= 0; i += 1) {
        data.push({
          x: time + i * 1000,
          y: Math.random(),
        });
      }
      return data;
    })()
  );
  /*
  useEffect(() => {
    const id = setInterval(() => {
      console.log(data.length);
      const __data =
        data.length > 10 ? data.slice(data.length - 10 + 2, data.length) : data;
      console.log(__data);
      const _data = [...__data, Math.random()];
      setData(_data);
    }, 1500);
    return () => clearInterval(id);
  }, [data]);
*/
  const options = {
    chart: {
      type: "spline",
      //animation: High, // don't animate in old IE
      marginRight: 10,
      events: {
        load: function () {
          // set up the updating of the chart each second
          var series = this.series[0];
          setInterval(function () {
            var x = new Date().getTime(), // current time
              y = Math.random();
            series.addPoint([x, y], true, true);
          }, 1000);
        },
      },
    },
    title: {
      text: "Training Status",
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      type: "category",
    },
    legend: {
      reversed: true,
    },
    plotOptions: {
      series: {
        stacking: "normal",
        dataLabels: {
          enabled: true,
          format: "<b>{point.y}</b>",
        },
      },
    },
    series: [{ name: "accuracy", data: data }],
  };

  return (
    <PageContainer>
      <ContentsTitle title={"Models"} />
      <ContentsContainer>
        <NavigationBreadcrumbs firstName={"Models"} firstLink={"/models"} />
        <HighchartsReact highcharts={Highcharts} options={options} />
      </ContentsContainer>
    </PageContainer>
  );
};

export default Models;
