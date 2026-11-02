var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_kenya_wards_1 = new ol.format.GeoJSON();
var features_kenya_wards_1 = format_kenya_wards_1.readFeatures(json_kenya_wards_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kenya_wards_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kenya_wards_1.addFeatures(features_kenya_wards_1);
var lyr_kenya_wards_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kenya_wards_1, 
                style: style_kenya_wards_1,
                popuplayertitle: 'kenya_wards',
                interactive: true,
                title: '<img src="styles/legend/kenya_wards_1.png" /> kenya_wards'
            });
var format_Provepilotteams_2 = new ol.format.GeoJSON();
var features_Provepilotteams_2 = format_Provepilotteams_2.readFeatures(json_Provepilotteams_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provepilotteams_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provepilotteams_2.addFeatures(features_Provepilotteams_2);
var lyr_Provepilotteams_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Provepilotteams_2, 
                style: style_Provepilotteams_2,
                popuplayertitle: 'Prove-pilot-teams',
                interactive: true,
                title: '<img src="styles/legend/Provepilotteams_2.png" /> Prove-pilot-teams'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_kenya_wards_1.setVisible(true);lyr_Provepilotteams_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_kenya_wards_1,lyr_Provepilotteams_2];
lyr_kenya_wards_1.set('fieldAliases', {'gid': 'gid', 'pop2009': 'pop2009', 'county': 'county', 'subcounty': 'subcounty', 'ward': 'ward', 'uid': 'uid', 'scuid': 'scuid', 'cuid': 'cuid', });
lyr_Provepilotteams_2.set('fieldAliases', {'id': 'id', 'Names': 'Names', });
lyr_kenya_wards_1.set('fieldImages', {'gid': 'TextEdit', 'pop2009': 'TextEdit', 'county': 'TextEdit', 'subcounty': 'TextEdit', 'ward': 'TextEdit', 'uid': 'TextEdit', 'scuid': 'TextEdit', 'cuid': 'TextEdit', });
lyr_Provepilotteams_2.set('fieldImages', {'id': 'TextEdit', 'Names': 'TextEdit', });
lyr_kenya_wards_1.set('fieldLabels', {'gid': 'no label', 'pop2009': 'inline label - always visible', 'county': 'inline label - always visible', 'subcounty': 'inline label - always visible', 'ward': 'inline label - always visible', 'uid': 'no label', 'scuid': 'no label', 'cuid': 'no label', });
lyr_Provepilotteams_2.set('fieldLabels', {'id': 'inline label - always visible', 'Names': 'inline label - always visible', });
lyr_Provepilotteams_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});