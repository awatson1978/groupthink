Template.map.rendered = function () {
    var self = this;
    self.node = self.find("#usaMap");

    console.log('self.node...');
    console.log(self.node);

    if (! self.handle) {
        self.handle = Deps.autorun(function () {


            var width = 960,
                height = 500;


            if(!self.find("#usaMap")){
                var chart_1 = d3.select('#choropleth')
                    .append("svg")
                    .attr("height", 500)
                    .attr("width", 960)
                    .chart("Choropleth")
                    .domain([0, 15])
                    .range('YlGnBu')
                    .projection(d3.geo.albersUsa())
                    .scale(960);

                queue()
                    .defer(d3.json, '/data/unemployment_2011.json')
                    .defer(d3.json, '/data/us_counties_20m_topo.json')
                    .await(makeMap)

                function makeMap(error, data, geo) {

                    county_feat = topojson.feature(geo, geo.objects.us_counties_20m).features
                    bind_data = data[0];
                    mapData = {'Geo': county_feat, 'ToBind': bind_data};

                    // Draw the charts
                    chart_1.draw(mapData);

                };
            }

            //console.log('checking usaTopology... ');
            //console.log(usaTopology);

            console.log(ZipCodes.find().fetch());


        });
    }
};

Template.map.destroyed = function () {
    this.handle && this.handle.stop();
};

