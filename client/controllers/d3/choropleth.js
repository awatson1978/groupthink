(function() {
    d3.chart('Choropleth', {

        initialize: function() {

            var chart = this;

            chart.brews = {'BuGn': ['#EDF8FB', '#CCECE6', '#CCECE6', '#66C2A4', '#41AE76',
                '#238B45', '#005824'],
                'BuPu': ['#EDF8FB', '#BFD3E6', '#9EBCDA', '#8C96C6', '#8C6BB1',
                    '#88419D', '#6E016B'],
                'GnBu': ['#F0F9E8', '#CCEBC5', '#A8DDB5', '#7BCCC4', '#4EB3D3',
                    '#2B8CBE', '#08589E'],
                'OrRd': ['#FEF0D9', '#FDD49E', '#FDBB84', '#FC8D59', '#EF6548',
                    '#D7301F', '#990000'],
                'PuBu': ['#F1EEF6', '#D0D1E6', '#A6BDDB', '#74A9CF', '#3690C0',
                    '#0570B0', '#034E7B'],
                'PuBuGn': ['#F6EFF7', '#D0D1E6', '#A6BDDB', '#67A9CF', '#3690C0',
                    '#02818A', '#016450'],
                'PuRd': ['#F1EEF6', '#D4B9DA', '#C994C7', '#DF65B0', '#E7298A',
                    '#CE1256', '#91003F'],
                'RdPu': ['#FEEBE2', '#FCC5C0', '#FA9FB5', '#F768A1', '#DD3497',
                    '#AE017E', '#7A0177'],
                'YlGn': ['#FFFFCC', '#D9F0A3', '#ADDD8E', '#78C679', '#41AB5D',
                    '#238443', '#005A32'],
                'YlGnBu': ['#FFFFCC', '#C7E9B4', '#7FCDBB', '#41B6C4', '#1D91C0',
                    '#225EA8', '#0C2C84'],
                'YlOrBr': ['#FFFFD4', '#FEE391', '#FEC44F', '#FE9929', '#EC7014',
                    '#CC4C02', '#8C2D04'],
                'YlOrRd': ['#FFFFB2', '#FED976', '#FEB24C', '#FD8D3C', '#FC4E2A',
                    '#E31A1C', '#B10026']};

            chart.w = chart.base.attr('width') || 960;
            chart.h = chart.base.attr('height') || 500;
            chart._range = chart._range || chart.brews.YlGnBu;
            chart._domain = chart._domain || 0;
            chart._path = d3.geo.path();
            chart._projection = chart._projection || d3.geo.mercator();
            chart._scale = chart._scale || 1000;

            chart.quantize = d3.scale.quantize()
                .domain(chart._domain)
                .range(chart._range);

            function dataBind(data) {

                var chart = this.chart();

                chart.geo_data = data.Geo;
                chart.data = data.ToBind;

                var getMax = function(data) {
                    var maxVal = -1;
                    var maxId = null;
                    for (var id in data) {
                        var value = data[id];
                        if (value > maxVal) {
                            maxId = id;
                            maxVal = value;
                        }
                    }
                    return maxVal;
                };

                chart._domain = chart._domain === 0 ? [0, getMax(chart.data)] : chart._domain;
                chart.quantize.domain(chart._domain).range(chart._range);

                return this.selectAll("path")
                    .data(chart.geo_data);
            }

            function insert() {
                var chart = this.chart();

                var scale = chart._scale;

                return this.append("path")
                    .style("fill", function (d) { return chart.quantize(chart.data[d.id]); })
                    .attr("d", chart._path.projection(chart._projection
                        .scale(chart._scale)
                        .translate([chart.w / 2, chart.h / 2])));
            }

            var mapBase = this.base
                .append('g')
                .classed('geodata', true)
                .attr('height', chart.h)
                .attr('width', chart.w);

            chart.layer('map', mapBase, {
                dataBind: dataBind,
                insert: insert
            });
        },

        width: function(newWidth) {
            if (arguments.length === 0) {
                return this.w;
            }
            this.w = newWidth;
            return this;
        },

        height: function(newHeight) {
            if (arguments.length === 0) {
                return this.h;
            }
            this.h = newHeight;
            return this;
        },

        range: function(newRange) {
            if (arguments.length === 0) {
                return this._range;
            }
            this._range = this.brews[newRange];
            return this;
        },

        domain: function(newDomain) {
            if (arguments.length === 0) {
                return this._domain;
            }
            this._domain= newDomain;
            return this;
        },

        projection: function(newProj) {
            if (arguments.length === 0) {
                return this._projection;
            }
            this._projection= newProj;
            return this;
        },

        scale: function(newScale) {
            if (arguments.length === 0) {
                return this._scale;
            }
            this._scale = newScale;
            return this;
        }

    });
}());