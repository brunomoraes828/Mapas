var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Bairros_2 = new ol.format.GeoJSON();
var features_Bairros_2 = format_Bairros_2.readFeatures(json_Bairros_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bairros_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bairros_2.addFeatures(features_Bairros_2);
var lyr_Bairros_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bairros_2, 
                style: style_Bairros_2,
                popuplayertitle: 'Bairros ',
                interactive: true,
    title: 'Bairros <br />\
    <img src="styles/legend/Bairros_2_0.png" /> Alto da Lapa<br />\
    <img src="styles/legend/Bairros_2_1.png" /> Alto do Bonfim<br />\
    <img src="styles/legend/Bairros_2_2.png" /> Boa Sorte<br />\
    <img src="styles/legend/Bairros_2_3.png" /> C.Historico<br />\
    <img src="styles/legend/Bairros_2_4.png" /> Carmo<br />\
    <img src="styles/legend/Bairros_2_5.png" /> Caxambu<br />\
    <img src="styles/legend/Bairros_2_6.png" /> Centro<br />\
    <img src="styles/legend/Bairros_2_7.png" /> Cond.B.Jesus II<br />\
    <img src="styles/legend/Bairros_2_8.png" /> Dona Joana<br />\
    <img src="styles/legend/Bairros_2_9.png" /> E.Dalv.I<br />\
    <img src="styles/legend/Bairros_2_10.png" /> E.Dalva<br />\
    <img src="styles/legend/Bairros_2_11.png" /> Indio<br />\
    <img src="styles/legend/Bairros_2_12.png" /> J. Kubitschek<br />\
    <img src="styles/legend/Bairros_2_13.png" /> J. S. Barbara<br />\
    <img src="styles/legend/Bairros_2_14.png" /> J. Taquaral<br />\
    <img src="styles/legend/Bairros_2_15.png" /> J.Babilonia<br />\
    <img src="styles/legend/Bairros_2_16.png" /> J.Esmeralda<br />\
    <img src="styles/legend/Bairros_2_17.png" /> J.Pireneus<br />\
    <img src="styles/legend/Bairros_2_18.png" /> Jaranapolis<br />\
    <img src="styles/legend/Bairros_2_19.png" /> Luciano Peixoto<br />\
    <img src="styles/legend/Bairros_2_20.png" /> M.Sobrado<br />\
    <img src="styles/legend/Bairros_2_21.png" /> Olaria<br />\
    <img src="styles/legend/Bairros_2_22.png" /> Paco d. Estalagem<br />\
    <img src="styles/legend/Bairros_2_23.png" /> PK .J.Brasilia<br />\
    <img src="styles/legend/Bairros_2_24.png" /> PQ. d. Estalagem<br />\
    <img src="styles/legend/Bairros_2_25.png" /> Radiolandia<br />\
    <img src="styles/legend/Bairros_2_26.png" /> Resi. Q.Sol<br />\
    <img src="styles/legend/Bairros_2_27.png" /> S. Luzia<br />\
    <img src="styles/legend/Bairros_2_28.png" /> S.Meia Ponte<br />\
    <img src="styles/legend/Bairros_2_29.png" /> St. Aero<br />\
    <img src="styles/legend/Bairros_2_30.png" /> V. Godinho<br />\
    <img src="styles/legend/Bairros_2_31.png" /> V. J. Aires<br />\
    <img src="styles/legend/Bairros_2_32.png" /> V. Ma. Vulpina<br />\
    <img src="styles/legend/Bairros_2_33.png" /> V. Matutina<br />\
    <img src="styles/legend/Bairros_2_34.png" /> V. Nhonho Godinho<br />\
    <img src="styles/legend/Bairros_2_35.png" /> V. Pequizeiro<br />\
    <img src="styles/legend/Bairros_2_36.png" /> V. Pompeu II<br />\
    <img src="styles/legend/Bairros_2_37.png" /> V. Pratinha<br />\
    <img src="styles/legend/Bairros_2_38.png" /> V. S. Barbara<br />\
    <img src="styles/legend/Bairros_2_39.png" /> V. Teod.Oliveira<br />\
    <img src="styles/legend/Bairros_2_40.png" /> V.Anduzeiro<br />\
    <img src="styles/legend/Bairros_2_41.png" /> V.Boa<br />\
    <img src="styles/legend/Bairros_2_42.png" /> V.Cintra<br />\
    <img src="styles/legend/Bairros_2_43.png" /> V.Couro<br />\
    <img src="styles/legend/Bairros_2_44.png" /> V.J.Figueredo<br />\
    <img src="styles/legend/Bairros_2_45.png" /> V.Marilia<br />\
    <img src="styles/legend/Bairros_2_46.png" /> V.Pompeu I<br />\
    <img src="styles/legend/Bairros_2_47.png" /> V.Zizito<br />\
    <img src="styles/legend/Bairros_2_48.png" /> <br />' });
var format_Limite_Municipal_3 = new ol.format.GeoJSON();
var features_Limite_Municipal_3 = format_Limite_Municipal_3.readFeatures(json_Limite_Municipal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_Municipal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_Municipal_3.addFeatures(features_Limite_Municipal_3);
var lyr_Limite_Municipal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limite_Municipal_3, 
                style: style_Limite_Municipal_3,
                popuplayertitle: 'Limite_Municipal',
                interactive: true,
                title: '<img src="styles/legend/Limite_Municipal_3.png" /> Limite_Municipal'
            });
var format_BAIRROSUSFBONFIM_4 = new ol.format.GeoJSON();
var features_BAIRROSUSFBONFIM_4 = format_BAIRROSUSFBONFIM_4.readFeatures(json_BAIRROSUSFBONFIM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BAIRROSUSFBONFIM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BAIRROSUSFBONFIM_4.addFeatures(features_BAIRROSUSFBONFIM_4);
var lyr_BAIRROSUSFBONFIM_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BAIRROSUSFBONFIM_4, 
                style: style_BAIRROSUSFBONFIM_4,
                popuplayertitle: 'BAIRROS - USF BONFIM ',
                interactive: true,
    title: 'BAIRROS - USF BONFIM <br />\
    <img src="styles/legend/BAIRROSUSFBONFIM_4_0.png" /> E.Dalv.I<br />\
    <img src="styles/legend/BAIRROSUSFBONFIM_4_1.png" /> J. S. Barbara<br />\
    <img src="styles/legend/BAIRROSUSFBONFIM_4_2.png" /> J.Pireneus<br />\
    <img src="styles/legend/BAIRROSUSFBONFIM_4_3.png" /> St. Aero<br />\
    <img src="styles/legend/BAIRROSUSFBONFIM_4_4.png" /> V. J. Aires<br />\
    <img src="styles/legend/BAIRROSUSFBONFIM_4_5.png" /> V. Nhonho Godinho<br />\
    <img src="styles/legend/BAIRROSUSFBONFIM_4_6.png" /> V. S. Barbara<br />\
    <img src="styles/legend/BAIRROSUSFBONFIM_4_7.png" /> V.J.Figueredo<br />' });
var format_BONFIM__5 = new ol.format.GeoJSON();
var features_BONFIM__5 = format_BONFIM__5.readFeatures(json_BONFIM__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BONFIM__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BONFIM__5.addFeatures(features_BONFIM__5);
var lyr_BONFIM__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BONFIM__5, 
                style: style_BONFIM__5,
                popuplayertitle: 'BONFIM_',
                interactive: true,
                title: '<img src="styles/legend/BONFIM__5.png" /> BONFIM_'
            });
var format_Redeassistenciais_6 = new ol.format.GeoJSON();
var features_Redeassistenciais_6 = format_Redeassistenciais_6.readFeatures(json_Redeassistenciais_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Redeassistenciais_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Redeassistenciais_6.addFeatures(features_Redeassistenciais_6);
var lyr_Redeassistenciais_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Redeassistenciais_6, 
                style: style_Redeassistenciais_6,
                popuplayertitle: ' Rede assistenciais',
                interactive: true,
    title: ' Rede assistenciais<br />\
    <img src="styles/legend/Redeassistenciais_6_0.png" /> CAPS Pirenópolis-GO<br />\
    <img src="styles/legend/Redeassistenciais_6_1.png" /> Hospital Estadual Ernestina Lopes Jaime<br />\
    <img src="styles/legend/Redeassistenciais_6_2.png" /> Secretaria Municipal de Saúde de Pirenópolis<br />\
    <img src="styles/legend/Redeassistenciais_6_3.png" /> Unidade Básica de Saúde - Atacir Ferreira da Silva<br />\
    <img src="styles/legend/Redeassistenciais_6_4.png" /> Unidade Básica de Saúde - Talles Raony Peixoto - Dida<br />\
    <img src="styles/legend/Redeassistenciais_6_5.png" /> Unidade Básica de Saúde Doutor Cinval de Carvalho<br />\
    <img src="styles/legend/Redeassistenciais_6_6.png" /> Unidade Básica de Saude Elizabeth Pereira dos Santos<br />\
    <img src="styles/legend/Redeassistenciais_6_7.png" /> Unidade de Saúde Alto do Bonfim<br />\
    <img src="styles/legend/Redeassistenciais_6_8.png" /> Unidade de Saúde Estrela Dalva<br />' });
var group_Equipamentosdesade = new ol.layer.Group({
                                layers: [lyr_Redeassistenciais_6,],
                                fold: 'close',
                                title: 'Equipamentos de saúde '});
var group_USFBONFIM = new ol.layer.Group({
                                layers: [lyr_BAIRROSUSFBONFIM_4,lyr_BONFIM__5,],
                                fold: 'open',
                                title: 'USF BONFIM '});
var group_LimitesAdministrativos = new ol.layer.Group({
                                layers: [lyr_Bairros_2,lyr_Limite_Municipal_3,],
                                fold: 'close',
                                title: 'Limites Administrativos '});
var group_MAPASBASE = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_OSMStandard_1,],
                                fold: 'open',
                                title: 'MAPAS BASE'});

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_Bairros_2.setVisible(true);lyr_Limite_Municipal_3.setVisible(true);lyr_BAIRROSUSFBONFIM_4.setVisible(true);lyr_BONFIM__5.setVisible(true);lyr_Redeassistenciais_6.setVisible(true);
var layersList = [group_MAPASBASE,group_LimitesAdministrativos,group_USFBONFIM,group_Equipamentosdesade];
lyr_Bairros_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nome': 'Nome', });
lyr_Limite_Municipal_3.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_BAIRROSUSFBONFIM_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Nome': 'Nome', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', });
lyr_BONFIM__5.set('fieldAliases', {'id': 'id', 'USF': 'USF', 'Ac.Domici': 'Ac.Domici', 'Def.F.Inca': 'Def.F.Inca', 'Obesid.3': 'Obesid.3', 'Cria.Idoso': 'Cria.Idoso', 'P.Res (O2)': 'P.Res (O2)', 'Gestante': 'Gestante', 'Hiperten': 'Hiperten', 'Cancer': 'Cancer', 'Trans.Ment': 'Trans.Ment', 'Hemodia': 'Hemodia', 'H.Han.Le.T': 'H.Han.Le.T', 'Observacao': 'Observacao', 'Abrang': 'Abrang', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_Redeassistenciais_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_Bairros_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nome': 'TextEdit', });
lyr_Limite_Municipal_3.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_BAIRROSUSFBONFIM_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Nome': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': 'TextEdit', 'auxiliary_storage_labeling_lineanchorclipping': 'TextEdit', 'auxiliary_storage_labeling_lineanchortype': 'TextEdit', 'auxiliary_storage_labeling_lineanchortextpoint': 'TextEdit', 'auxiliary_storage_labeling_labelrotation': 'Hidden', });
lyr_BONFIM__5.set('fieldImages', {'id': 'TextEdit', 'USF': 'TextEdit', 'Ac.Domici': 'TextEdit', 'Def.F.Inca': 'TextEdit', 'Obesid.3': 'TextEdit', 'Cria.Idoso': 'TextEdit', 'P.Res (O2)': 'TextEdit', 'Gestante': 'TextEdit', 'Hiperten': 'TextEdit', 'Cancer': 'TextEdit', 'Trans.Ment': 'TextEdit', 'Hemodia': 'TextEdit', 'H.Han.Le.T': 'TextEdit', 'Observacao': 'TextEdit', 'Abrang': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': '', 'auxiliary_storage_labeling_lineanchorclipping': '', 'auxiliary_storage_labeling_lineanchortype': '', 'auxiliary_storage_labeling_lineanchortextpoint': '', });
lyr_Redeassistenciais_6.set('fieldImages', {'id': '', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'auxiliary_storage_labeling_show': 'Hidden', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_Bairros_2.set('fieldLabels', {'fid': 'inline label - always visible', 'id': 'inline label - always visible', 'Nome': 'inline label - always visible', });
lyr_Limite_Municipal_3.set('fieldLabels', {'CD_MUN': 'inline label - always visible', 'NM_MUN': 'inline label - always visible', 'SIGLA_UF': 'inline label - always visible', 'AREA_KM2': 'inline label - always visible', });
lyr_BAIRROSUSFBONFIM_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Nome': 'no label', 'auxiliary_storage_labeling_lineanchorpercent': 'no label', 'auxiliary_storage_labeling_lineanchorclipping': 'no label', 'auxiliary_storage_labeling_lineanchortype': 'no label', 'auxiliary_storage_labeling_lineanchortextpoint': 'no label', });
lyr_BONFIM__5.set('fieldLabels', {'id': 'inline label - always visible', 'USF': 'inline label - always visible', 'Ac.Domici': 'inline label - always visible', 'Def.F.Inca': 'inline label - always visible', 'Obesid.3': 'inline label - always visible', 'Cria.Idoso': 'inline label - always visible', 'P.Res (O2)': 'inline label - always visible', 'Gestante': 'inline label - always visible', 'Hiperten': 'inline label - always visible', 'Cancer': 'inline label - always visible', 'Trans.Ment': 'inline label - always visible', 'Hemodia': 'inline label - always visible', 'H.Han.Le.T': 'inline label - always visible', 'Observacao': 'inline label - always visible', 'Abrang': 'inline label - always visible', 'auxiliary_storage_labeling_lineanchorpercent': 'header label - visible with data', 'auxiliary_storage_labeling_lineanchorclipping': 'header label - visible with data', 'auxiliary_storage_labeling_lineanchortype': 'header label - visible with data', 'auxiliary_storage_labeling_lineanchortextpoint': 'no label', });
lyr_Redeassistenciais_6.set('fieldLabels', {'id': 'inline label - always visible', 'Name': 'inline label - always visible', 'description': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'inline label - always visible', });
lyr_Redeassistenciais_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});