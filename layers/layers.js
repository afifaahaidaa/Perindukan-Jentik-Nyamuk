var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_adm_rt_rw_kel_pasirkaliki_cimahiutara_1 = new ol.format.GeoJSON();
var features_adm_rt_rw_kel_pasirkaliki_cimahiutara_1 = format_adm_rt_rw_kel_pasirkaliki_cimahiutara_1.readFeatures(json_adm_rt_rw_kel_pasirkaliki_cimahiutara_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adm_rt_rw_kel_pasirkaliki_cimahiutara_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adm_rt_rw_kel_pasirkaliki_cimahiutara_1.addFeatures(features_adm_rt_rw_kel_pasirkaliki_cimahiutara_1);
var lyr_adm_rt_rw_kel_pasirkaliki_cimahiutara_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adm_rt_rw_kel_pasirkaliki_cimahiutara_1, 
                style: style_adm_rt_rw_kel_pasirkaliki_cimahiutara_1,
                popuplayertitle: "adm_rt_rw_kel_pasirkaliki_cimahiutara",
                interactive: true,
                title: '<img src="styles/legend/adm_rt_rw_kel_pasirkaliki_cimahiutara_1.png" /> adm_rt_rw_kel_pasirkaliki_cimahiutara'
            });
var format_buffered_2 = new ol.format.GeoJSON();
var features_buffered_2 = format_buffered_2.readFeatures(json_buffered_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffered_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffered_2.addFeatures(features_buffered_2);
var lyr_buffered_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffered_2, 
                style: style_buffered_2,
                popuplayertitle: "buffered",
                interactive: true,
                title: '<img src="styles/legend/buffered_2.png" /> buffered'
            });
var format_waypoints_3 = new ol.format.GeoJSON();
var features_waypoints_3 = format_waypoints_3.readFeatures(json_waypoints_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waypoints_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waypoints_3.addFeatures(features_waypoints_3);
var lyr_waypoints_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waypoints_3, 
                style: style_waypoints_3,
                popuplayertitle: "waypoints",
                interactive: true,
                title: '<img src="styles/legend/waypoints_3.png" /> waypoints'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_adm_rt_rw_kel_pasirkaliki_cimahiutara_1.setVisible(true);lyr_buffered_2.setVisible(true);lyr_waypoints_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_adm_rt_rw_kel_pasirkaliki_cimahiutara_1,lyr_buffered_2,lyr_waypoints_3];
lyr_adm_rt_rw_kel_pasirkaliki_cimahiutara_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_buffered_2.set('fieldAliases', {'Name': 'Name', });
lyr_waypoints_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_adm_rt_rw_kel_pasirkaliki_cimahiutara_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_buffered_2.set('fieldImages', {'Name': 'TextEdit', });
lyr_waypoints_3.set('fieldImages', {'fid': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_adm_rt_rw_kel_pasirkaliki_cimahiutara_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_buffered_2.set('fieldLabels', {'Name': 'no label', });
lyr_waypoints_3.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_waypoints_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});