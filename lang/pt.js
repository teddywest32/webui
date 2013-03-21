/*
Copyright (c) 2011 BitTorrent, Inc. All rights reserved.

Use of this source code is governed by a BSD-style that can be
found in the LICENSE file.
*/

var LANG_STR =
{
   "CT_MASK1":"Ficheiros Torrent||*.torrent||Todos os ficheiros (*.*)||*.*||",
   "DLG_BTN_OK":"OK",
   "DLG_BTN_CANCEL":"Cancelar",
   "DLG_BTN_APPLY":"Aplicar",
   "DLG_BTN_YES":"Sim",
   "DLG_BTN_NO":"Não",
   "DLG_BTN_CLOSE":"Fechar",
   "DLG_SETTINGS_00":"Preferências",
   "DLG_SETTINGS_1_GENERAL_01":"Idioma",
   "DLG_SETTINGS_1_GENERAL_02":"Idioma:",
   "DLG_SETTINGS_1_GENERAL_10":"Privacidade",
   "DLG_SETTINGS_1_GENERAL_11":"Procurar actualizações automaticamente",
   "DLG_SETTINGS_1_GENERAL_12":"Actualização para versões beta",
   "DLG_SETTINGS_1_GENERAL_13":"Enviar informação anónima ao procurar actualizações",
   "DLG_SETTINGS_1_GENERAL_17":"Ao Transferir",
   "DLG_SETTINGS_1_GENERAL_18":"Adicionar .!ut aos ficheiros imcompletos",
   "DLG_SETTINGS_1_GENERAL_19":"Pré-alocar todos os ficheiros",
   "DLG_SETTINGS_1_GENERAL_20":"Prevenir suspensão se existirem torrents activos",
   "DLG_SETTINGS_2_UI_01":"Opções de Visualização",
   "DLG_SETTINGS_2_UI_02":"Confirmar ao apagar torrents",
   "DLG_SETTINGS_2_UI_03":"Confirmar ao apagar trackers",
   "DLG_SETTINGS_2_UI_04":"Mostrar diálogo de conf. ao sair",
   "DLG_SETTINGS_2_UI_05":"Alternar a cor de fundo da lista",
   "DLG_SETTINGS_2_UI_06":"Mostrar vel. actual na barra de estado",
   "DLG_SETTINGS_2_UI_07":"Mostrar lim. de vel. na barra de estado",
   "DLG_SETTINGS_2_UI_15":"Ao Adicionar Torrents",
   "DLG_SETTINGS_2_UI_16":"Não iniciar a transf. automaticamente",
   "DLG_SETTINGS_2_UI_17":"Activar a janela do programa",
   "DLG_SETTINGS_2_UI_18":"Mostrar uma janela que mostre os ficheiros dentro do torrent",
   "DLG_SETTINGS_2_UI_19":"Acções para Duplo Clique",
   "DLG_SETTINGS_2_UI_20":"Para torrents em envio:",
   "DLG_SETTINGS_2_UI_22":"Para torrents em recepção:",
   "DLG_SETTINGS_3_PATHS_01":"Localização dos Ficheiros Recebidos",
   "DLG_SETTINGS_3_PATHS_02":"Colocar novos downloads em:",
   "DLG_SETTINGS_3_PATHS_03":"Mostrar sempre diálogo ao adicionar manualmente",
   "DLG_SETTINGS_3_PATHS_06":"Mover downloads completos para:",
   "DLG_SETTINGS_3_PATHS_07":"Adicionar a descrição do torrent",
   "DLG_SETTINGS_3_PATHS_10":"Apenas mover do directório padrão de download",
   "DLG_SETTINGS_3_PATHS_11":"Localização dos .torrents",
   "DLG_SETTINGS_3_PATHS_12":"Guardar .torrents em:",
   "DLG_SETTINGS_3_PATHS_15":"Mover .torrents de tarefas terminadas para:",
   "DLG_SETTINGS_3_PATHS_18":"Carregar .torrents automat. de:",
   "DLG_SETTINGS_3_PATHS_19":"Apagar .torrents carregados",
   "DLG_SETTINGS_4_CONN_01":"Porta de Escuta",
   "DLG_SETTINGS_4_CONN_02":"Porta utilzada para ligações de entrada:",
   "DLG_SETTINGS_4_CONN_04":"Porta ao acaso",
   "DLG_SETTINGS_4_CONN_05":"Escolher porta ao acaso ao iniciar",
   "DLG_SETTINGS_4_CONN_06":"Activar map. de portas UPnP",
   "DLG_SETTINGS_4_CONN_07":"Activar map. de portas NAT-PMP",
   "DLG_SETTINGS_4_CONN_08":"Servidor Proxy",
   "DLG_SETTINGS_4_CONN_09":"Tipo:",
   "DLG_SETTINGS_4_CONN_11":"Proxy:",
   "DLG_SETTINGS_4_CONN_13":"Porta:",
   "DLG_SETTINGS_4_CONN_15":"Autenticação",
   "DLG_SETTINGS_4_CONN_16":"Nome de Utilizador:",
   "DLG_SETTINGS_4_CONN_18":"Password:",
   "DLG_SETTINGS_4_CONN_19":"Procurar nomes de host através de proxy",
   "DLG_SETTINGS_4_CONN_20":"Utilizar servidor proxy para ligações peer-to-peer",
   "DLG_SETTINGS_4_CONN_21":"Adic. excep. à Firewall do Windows",
   "DLG_SETTINGS_4_CONN_22":"Privacidade de Proxy",
   "DLG_SETTINGS_4_CONN_23":"Desactivar toda a procura em DNS locais",
   "DLG_SETTINGS_4_CONN_24":"Desactivar opções que deixam sair informação que o identifiquem",
   "DLG_SETTINGS_4_CONN_25":"Desactivar ligações não suportadas pela proxy",
   "DLG_SETTINGS_5_BANDWIDTH_01":"Limite Global de Velocidade de Envio",
   "DLG_SETTINGS_5_BANDWIDTH_02":"Vel. máxima de envio (kB/s): [0: ilimitado]",
   "DLG_SETTINGS_5_BANDWIDTH_03":"Automático",
   "DLG_SETTINGS_5_BANDWIDTH_05":"Vel. de envio altern. quando não há downloads (kB/s):",
   "DLG_SETTINGS_5_BANDWIDTH_07":"Limite Global de Velocidade de Recepção",
   "DLG_SETTINGS_5_BANDWIDTH_08":"Vel. máx. de recepção (kB/s): [0: ilimitado]",
   "DLG_SETTINGS_5_BANDWIDTH_10":"Número de Ligações",
   "DLG_SETTINGS_5_BANDWIDTH_11":"Número máximo global de ligações:",
   "DLG_SETTINGS_5_BANDWIDTH_14":"Número máximo de peers ligados por torrent:",
   "DLG_SETTINGS_5_BANDWIDTH_15":"Número de slots de envio por torrent:",
   "DLG_SETTINGS_5_BANDWIDTH_17":"Usar slots adicionais se a vel. de upload for < 90%",
   "DLG_SETTINGS_5_BANDWIDTH_18":"Opções de limite de vel. global",
   "DLG_SETTINGS_5_BANDWIDTH_19":"Aplicar limites ao overhead de transport",
   "DLG_SETTINGS_5_BANDWIDTH_20":"Aplicar limites a ligações uTP",
   "DLG_SETTINGS_6_BITTORRENT_01":"Características Básicas do BitTorrent",
   "DLG_SETTINGS_6_BITTORRENT_02":"Activar Rede DHT",
   "DLG_SETTINGS_6_BITTORRENT_03":"Pedir inf. de scrape ao tracker",
   "DLG_SETTINGS_6_BITTORRENT_04":"Activar DHT para torrents novos",
   "DLG_SETTINGS_6_BITTORRENT_05":"Activar Troca de Peers",
   "DLG_SETTINGS_6_BITTORRENT_06":"Ligar Descoberta de Peers Locais",
   "DLG_SETTINGS_6_BITTORRENT_07":"Limitar larg. de banda dos peers locais",
   "DLG_SETTINGS_6_BITTORRENT_08":"IP/Nome de host a relatar ao tracker:",
   "DLG_SETTINGS_6_BITTORRENT_10":"Encriptação de Protocolo",
   "DLG_SETTINGS_6_BITTORRENT_11":"Envio:",
   "DLG_SETTINGS_6_BITTORRENT_13":"Permitir ligações de entrada antigas",
   "DLG_SETTINGS_6_BITTORRENT_14":"Activar gestão de largura de banda [uTP]",
   "DLG_SETTINGS_6_BITTORRENT_15":"Activar suporte a tracker UDP",
   "DLG_SETTINGS_7_TRANSFERCAP_01":"Ligar Limite de Transferência",
   "DLG_SETTINGS_7_TRANSFERCAP_02":"Opções de Limite",
   "DLG_SETTINGS_7_TRANSFERCAP_03":"Tipo de Limite:",
   "DLG_SETTINGS_7_TRANSFERCAP_04":"Limite de Largura de Banda:",
   "DLG_SETTINGS_7_TRANSFERCAP_05":"Período de tempo (dias):",
   "DLG_SETTINGS_7_TRANSFERCAP_06":"Histórico de uso por período seleccionado:",
   "DLG_SETTINGS_7_TRANSFERCAP_07":"Enviado:",
   "DLG_SETTINGS_7_TRANSFERCAP_08":"Transferido",
   "DLG_SETTINGS_7_TRANSFERCAP_09":"Enviado + Transferido:",
   "DLG_SETTINGS_7_TRANSFERCAP_10":"Periodo de tempo:",
   "DLG_SETTINGS_7_TRANSFERCAP_11":"Últimos %dias",
   "DLG_SETTINGS_7_TRANSFERCAP_12":"Apagar Histórico",
   "DLG_SETTINGS_8_QUEUEING_01":"Definições de Fila",
   "DLG_SETTINGS_8_QUEUEING_02":"Número máximo de torrents activos (envio ou recepção):",
   "DLG_SETTINGS_8_QUEUEING_04":"Número máximo de downloads activos:",
   "DLG_SETTINGS_8_QUEUEING_06":"Enviar Enquanto [Valores padrão]",
   "DLG_SETTINGS_8_QUEUEING_07":"Rácio Mínimo (%):",
   "DLG_SETTINGS_8_QUEUEING_09":"Tempo mínimo de seed (minutos)",
   "DLG_SETTINGS_8_QUEUEING_11":"Tarefas de envio têm prioridade mais alta que as tarefas de recepção",
   "DLG_SETTINGS_8_QUEUEING_12":"Quando o µTorrent Atingir o Objectivo de Envio",
   "DLG_SETTINGS_8_QUEUEING_13":"Limitar a vel. de envio a (kB/s): [0: parar]",
   "DLG_SETTINGS_9_SCHEDULER_01":"Activar Agendador de Tarefas",
   "DLG_SETTINGS_9_SCHEDULER_02":"Tabela do Agendador",
   "DLG_SETTINGS_9_SCHEDULER_04":"Definições do Agendador de Tarefas",
   "DLG_SETTINGS_9_SCHEDULER_05":"Vel.de envio limitada (kB/s):",
   "DLG_SETTINGS_9_SCHEDULER_07":"Vel. de recepção limitada (kB/s):",
   "DLG_SETTINGS_9_SCHEDULER_09":"Desactivar DHT ao desligar",
   "DLG_SETTINGS_9_WEBUI_01":"Activar Web UI",
   "DLG_SETTINGS_9_WEBUI_02":"Autenticação",
   "DLG_SETTINGS_9_WEBUI_03":"Nome",
   "DLG_SETTINGS_9_WEBUI_05":"Password",
   "DLG_SETTINGS_9_WEBUI_07":"Activar Conta de convidado com nome:",
   "DLG_SETTINGS_9_WEBUI_09":"Conectividade",
   "DLG_SETTINGS_9_WEBUI_10":"Porta de escuta alternativa (padrão é a porta de ligação):",
   "DLG_SETTINGS_9_WEBUI_12":"Restringir acesso aos seguintes IPs (Separar entradas com uma vírgula):",
   "DLG_SETTINGS_A_ADVANCED_01":"Opções avançadas [CUIDADO: Não modifique!]",
   "DLG_SETTINGS_A_ADVANCED_02":"Valor:",
   "DLG_SETTINGS_A_ADVANCED_03":"Verdadeiro",
   "DLG_SETTINGS_A_ADVANCED_04":"Falso",
   "DLG_SETTINGS_A_ADVANCED_05":"Definir",
   "DLG_SETTINGS_B_ADV_UI_01":"Lista popup de Velocidade [Separe valores com uma vírgula]",
   "DLG_SETTINGS_B_ADV_UI_02":"Ignorar lista popup automática de velocidade",
   "DLG_SETTINGS_B_ADV_UI_03":"Lista de vel. de envio:",
   "DLG_SETTINGS_B_ADV_UI_05":"Lista de vel. de recepção:",
   "DLG_SETTINGS_B_ADV_UI_07":"Descrições Persistentes [Separe descrições com o caracter | ]",
   "DLG_SETTINGS_B_ADV_UI_08":"Motores de Busca [Formato: nome|URL]",
   "DLG_SETTINGS_C_ADV_CACHE_01":"Definições Básicas da Cache",
   "DLG_SETTINGS_C_ADV_CACHE_02":"A cache do disco é usada para manter os dados acedidos mais frequentemente em memória para reduzir o número de acessos ao disco. O µTorrent normalmente gere a cache automaticamente, mas pode alterar isso modificando estas definições.",
   "DLG_SETTINGS_C_ADV_CACHE_03":"Ignorar o tam. autom. da cache e especificá-lo manualmente (MB):",
   "DLG_SETTINGS_C_ADV_CACHE_05":"Reduzir a utilização da memória quando a cache não é necessária",
   "DLG_SETTINGS_C_ADV_CACHE_06":"Definições Avançadas de Cache",
   "DLG_SETTINGS_C_ADV_CACHE_07":"Activar cache para escritas no disco",
   "DLG_SETTINGS_C_ADV_CACHE_08":"Escrever blocos não utilizados todos os 2 minutos",
   "DLG_SETTINGS_C_ADV_CACHE_09":"Escrever partes terminadas imediatamente",
   "DLG_SETTINGS_C_ADV_CACHE_10":"Ligar a cache para leituras do disco",
   "DLG_SETTINGS_C_ADV_CACHE_11":"Desl. a cache de leitura se a vel. de envio estiver lenta",
   "DLG_SETTINGS_C_ADV_CACHE_12":"Remover blocos antigos da cache",
   "DLG_SETTINGS_C_ADV_CACHE_13":"Aumentar o tamanho automático da cache quando esta está cheia",
   "DLG_SETTINGS_C_ADV_CACHE_14":"Desligar o caching do Windows para escritas",
   "DLG_SETTINGS_C_ADV_CACHE_15":"Desligar o caching do Windows para leituras",
   "DLG_SETTINGS_C_ADV_RUN_01":"Correr Programa",
   "DLG_SETTINGS_C_ADV_RUN_02":"Correr este programa quando um torrent acaba:",
   "DLG_SETTINGS_C_ADV_RUN_04":"Correr este programa quando um torrent muda de estado:",
   "DLG_SETTINGS_C_ADV_RUN_06":"You can use these commands:\r\n%F - Name of downloaded file (for single file torrents)\r\n%D - Directory where files are saved\r\n%N - Title of torrent\r\n%S - State of torrent\r\n%L - Label\r\n%T - Tracker\r\n%M - Status message string (same as status column)\r\n%I - hex encoded info-hash\r\n\r\nState is a combination of:\r\nstarted = 1, checking = 2, start-after-check = 4,\r\nchecked = 8, error = 16, paused = 32, auto = 64, loaded = 128",
   "DLG_TORRENTPROP_00":"Propriedades do Torrent",
   "DLG_TORRENTPROP_1_GEN_01":"Trackers (separar filas com uma linha vazia)",
   "DLG_TORRENTPROP_1_GEN_03":"Definições de Largura de Banda",
   "DLG_TORRENTPROP_1_GEN_04":"Vel. máx. de envio (kB/s): [0: por defeito]",
   "DLG_TORRENTPROP_1_GEN_06":"Vel. máx. de recepção (kB/s): [0: por defeito]",
   "DLG_TORRENTPROP_1_GEN_08":"Número de slots de envio: [0: por defeito]",
   "DLG_TORRENTPROP_1_GEN_10":"Enviar Enquanto",
   "DLG_TORRENTPROP_1_GEN_11":"Ignorar definições padrão",
   "DLG_TORRENTPROP_1_GEN_12":"Taxa mínima (%):",
   "DLG_TORRENTPROP_1_GEN_14":"Tempo mínimo de envio (minutos):",
   "DLG_TORRENTPROP_1_GEN_16":"Outras Definições",
   "DLG_TORRENTPROP_1_GEN_17":"Seeding Inicial",
   "DLG_TORRENTPROP_1_GEN_18":"Activar DHT",
   "DLG_TORRENTPROP_1_GEN_19":"Troca de Peers",
   "DLG_ADDEDITRSSFEED_03":"Feed",
   "DLG_ADDEDITRSSFEED_04":"URL da Feed:",
   "DLG_ADDEDITRSSFEED_05":"Pseudónimo:",
   "DLG_ADDEDITRSSFEED_06":"Subscrição",
   "DLG_ADDEDITRSSFEED_07":"Não receber automaticamente todos os itens",
   "DLG_ADDEDITRSSFEED_08":"Receber automaticamente todos os itens publicados na feed",
   "DLG_ADDEDITRSSFEED_09":"Usar filtro de ep. inteligente",
   "DLG_RSSDOWNLOADER_02":"Feeds||Favoritos||Histórico||",
   "DLG_RSSDOWNLOADER_03":"All Feeds",
   "DLG_RSSDOWNLOADER_04":"Definições de Filtro",
   "DLG_RSSDOWNLOADER_05":"Nome:",
   "DLG_RSSDOWNLOADER_06":"Filtro:",
   "DLG_RSSDOWNLOADER_07":"Não:",
   "DLG_RSSDOWNLOADER_08":"Guardar em:",
   "DLG_RSSDOWNLOADER_09":"Feed:",
   "DLG_RSSDOWNLOADER_10":"Qualidade:",
   "DLG_RSSDOWNLOADER_11":"Episódio Número: [ex. 1x12-14]",
   "DLG_RSSDOWNLOADER_12":"Filtro corresponde ao nome orig. e não ao descodificado",
   "DLG_RSSDOWNLOADER_13":"Não iniciar transferências automaticamente",
   "DLG_RSSDOWNLOADER_14":"Filtro de ep. intel.",
   "DLG_RSSDOWNLOADER_15":"Dar prior. mais alta à recepção",
   "DLG_RSSDOWNLOADER_16":"Intervalo mínimo",
   "DLG_RSSDOWNLOADER_17":"Desc. para torrents novos:",
   "DLG_RSSDOWNLOADER_18":"Adicionar Feed RSS...",
   "DLG_RSSDOWNLOADER_19":"Editar Feed...",
   "DLG_RSSDOWNLOADER_20":"Desligar Feed",
   "DLG_RSSDOWNLOADER_21":"Activar Feed",
   "DLG_RSSDOWNLOADER_22":"Actualizar Feed",
   "DLG_RSSDOWNLOADER_23":"Apagar Feed",
   "DLG_RSSDOWNLOADER_24":"Download",
   "DLG_RSSDOWNLOADER_25":"Abrir URL no Browser",
   "DLG_RSSDOWNLOADER_26":"Adicionar aos Favoritos",
   "DLG_RSSDOWNLOADER_27":"Adicionar",
   "DLG_RSSDOWNLOADER_28":"Apagar",
   "DLG_RSSDOWNLOADER_29":"Todos",
   "DLG_RSSDOWNLOADER_30":"(Todos)",
   "DLG_RSSDOWNLOADER_31":"(corresponde sempre)||(corresponde somente uma vez)||12 horas||1 dia||2 dias||3 dias||4 dias||1 semana||2 semanas||3 semanas||1 mês||",
   "DLG_RSSDOWNLOADER_32":"Adicionar Feed RSS",
   "DLG_RSSDOWNLOADER_33":"Editar Feed RSS",
   "DLG_RSSDOWNLOADER_34":"Remove RSS Feed(s)",
   "DLG_RSSDOWNLOADER_35":"Really delete the %d selected RSS Feeds?",
   "DLG_RSSDOWNLOADER_36":"Eliminar Feed RSS \"%s\"?",
   "FEED_COL_FULLNAME":"Nome Completo",
   "FEED_COL_NAME":"Nome",
   "FEED_COL_EPISODE":"Episódio",
   "FEED_COL_FORMAT":"Formato",
   "FEED_COL_CODEC":"Codec",
   "FEED_COL_DATE":"Data",
   "FEED_COL_FEED":"Feed",
   "FEED_COL_URL":"URL de origem",
   "PRS_COL_IP":"IP",
   "PRS_COL_PORT":"Porta",
   "PRS_COL_CLIENT":"Cliente",
   "PRS_COL_FLAGS":"Flags",
   "PRS_COL_PCNT":"%",
   "PRS_COL_RELEVANCE":"Relevância",
   "PRS_COL_DOWNSPEED":"Vel. de Recepção",
   "PRS_COL_UPSPEED":"Vel. de Envio",
   "PRS_COL_REQS":"Pedidos",
   "PRS_COL_WAITED":"Esperou",
   "PRS_COL_UPLOADED":"Enviado",
   "PRS_COL_DOWNLOADED":"Recebido",
   "PRS_COL_HASHERR":"Hasherr",
   "PRS_COL_PEERDL":"Dl. do Peer",
   "PRS_COL_MAXUP":"EnvMax",
   "PRS_COL_MAXDOWN":"RecMax",
   "PRS_COL_QUEUED":"Na fila",
   "PRS_COL_INACTIVE":"Inactivo",
   "FI_COL_DONE":"Realizado",
   "FI_COL_FIRSTPC":"Primeira parte",
   "FI_COL_NAME":"Nome",
   "FI_COL_NUMPCS":"# de partes",
   "FI_COL_PCNT":"%",
   "FI_COL_PRIO":"Prioridade",
   "FI_COL_SIZE":"Tamanho",
   "FI_PRI0":"saltar",
   "FI_PRI1":"baixa",
   "FI_PRI2":"normal",
   "FI_PRI3":"alta",
   "GN_TP_01":"Recebido:",
   "GN_TP_02":"Enviado:",
   "GN_TP_03":"Seeds:",
   "GN_TP_04":"Restante:",
   "GN_TP_05":"Vel. Recepção:",
   "GN_TP_06":"Veloc. Envio:",
   "GN_TP_07":"Peers:",
   "GN_TP_08":"Rácio de Part.:",
   "GN_TP_09":"Guardar Como:",
   "GN_TP_10":"Hash:",
   "GN_GENERAL":"Geral",
   "GN_TRANSFER":"Transferência",
   "GN_XCONN":"%d de %d ligados (%d no swarm)",
   "MAIN_TITLEBAR_SPEED":"R:%s E:%s - %s",
   "MENU_COPY":"Copiar",
   "MENU_RESET":"Reset",
   "MENU_UNLIMITED":"Ilimitado",
   "MP_RESOLVE_IPS":"Resolver IPs",
   "MF_GETFILE":"Get File(s)",
   "MF_DONT":"Não Transferir",
   "MF_HIGH":"Prioridade Alta",
   "MF_LOW":"Prioridade Baixa",
   "MF_NORMAL":"Prioridade Normal",
   "ML_COPY_MAGNETURI":"Copiar Magnet URI",
   "ML_DELETE_DATA":"Eliminar Dados",
   "ML_DELETE_TORRENT":"Eliminar .torrent",
   "ML_DELETE_DATATORRENT":"Eliminar .torrent + Dados",
   "ML_FORCE_RECHECK":"Forçar Verificação",
   "ML_FORCE_START":"Forçar Início",
   "ML_LABEL":"Descrição",
   "ML_PAUSE":"Pausa",
   "ML_PROPERTIES":"Propriedades",
   "ML_QUEUEDOWN":"Mover Fila Rec",
   "ML_QUEUEUP":"Mover Fila Env",
   "ML_REMOVE":"Remover",
   "ML_REMOVE_AND":"Remover E",
   "ML_START":"Iniciar",
   "ML_STOP":"Parar",
   "OV_CAT_ACTIVE":"Activo",
   "OV_CAT_ALL":"Todos",
   "OV_CAT_COMPL":"Completo",
   "OV_CAT_DL":"A transferir",
   "OV_CAT_INACTIVE":"Inactivo",
   "OV_CAT_NOLABEL":"Sem Descrição",
   "OV_COL_AVAIL":"||Disp.||Disponibilidade",
   "OV_COL_DATE_ADDED":"Adicionado Ligado",
   "OV_COL_DATE_COMPLETED":"Terminado Em",
   "OV_COL_DONE":"Realizado",
   "OV_COL_DOWNLOADED":"Recebido",
   "OV_COL_DOWNSPD":"Veloc. de Recepção",
   "OV_COL_ETA":"Tempo Rest.",
   "OV_COL_LABEL":"Descrição",
   "OV_COL_NAME":"Nome",
   "OV_COL_ORDER":"#",
   "OV_COL_PEERS":"Peers",
   "OV_COL_REMAINING":"Restante",
   "OV_COL_SEEDS":"Seeds",
   "OV_COL_SEEDS_PEERS":"Seeds/Peers",
   "OV_COL_SHARED":"Ratio",
   "OV_COL_SIZE":"Tamanho",
   "OV_COL_SOURCE_URL":"URL de origem",
   "OV_COL_STATUS":"Estado",
   "OV_COL_UPPED":"Enviado",
   "OV_COL_UPSPD":"Veloc. de Envio",
   "OV_CONFIRM_DELETEDATA_MULTIPLE":"Tem a certeza que deseja remover os %d torrents seleccionados e toda a informação associada?",
   "OV_CONFIRM_DELETEDATA_ONE":"Tem a certeza que deseja remover o torrent seleccionado e toda a informação associada?",
   "OV_CONFIRM_DELETE_MULTIPLE":"Tem a certeza que deseja remover os %d torrents seleccionados?",
   "OV_CONFIRM_DELETE_ONE":"Tem a certeza que deseja remover o torrent selccionado?",
   "OV_CONFIRM_DELETE_RSSFILTER":"Eliminar o Filtro RSS \"%s\"?",
   "OV_FL_CHECKED":"Verificado: %:.1d%",
   "OV_FL_DOWNLOADING":"A transferir",
   "OV_FL_ERROR":"Erro: %s",
   "OV_FL_FINISHED":"Concluído",
   "OV_FL_PAUSED":"Pausado",
   "OV_FL_QUEUED":"Na fila",
   "OV_FL_QUEUED_SEED":"Seed na fila",
   "OV_FL_SEEDING":"A enviar",
   "OV_FL_STOPPED":"Parado",
   "OV_NEWLABEL_CAPTION":"Adicionar Descrição",
   "OV_NEWLABEL_TEXT":"Introduza a nova descrição para o torrent selecionado:",
   "OV_NEW_LABEL":"Nova descrição...",
   "OV_REMOVE_LABEL":"Remover Descrição",
   "OV_TABS":"Geral||Trackers||Peers||Partes||Ficheiros||Velocidade||Registo||",
   "OV_TB_ADDTORR":"Adicinar Torrent",
   "OV_TB_ADDURL":"Adicinar Torrent do URL",
   "OV_TB_PAUSE":"Pausa",
   "OV_TB_PREF":"Preferências",
   "OV_TB_QUEUEDOWN":"Mover Fila Rec",
   "OV_TB_QUEUEUP":"Mover Fila Env",
   "OV_TB_REMOVE":"Remover",
   "OV_TB_RSSDOWNLDR":"Transferidor RSS",
   "OV_TB_START":"Iniciar",
   "OV_TB_STOP":"Parar",
   "MM_FILE":"Ficheiro",
   "MM_FILE_ADD_TORRENT":"Adicionar Torrent...",
   "MM_FILE_ADD_URL":"Adicionar Torrent do URL...",
   "MM_OPTIONS":"Opções",
   "MM_OPTIONS_PREFERENCES":"Preferências",
   "MM_OPTIONS_SHOW_CATEGORY":"Mostrar Lista de Categorias",
   "MM_OPTIONS_SHOW_DETAIL":"Mostrar Informações Detalhadas",
   "MM_OPTIONS_SHOW_STATUS":"Mostrar Barra de Estado",
   "MM_OPTIONS_SHOW_TOOLBAR":"Mostrar Barra de Ferramentas",
   "MM_OPTIONS_TAB_ICONS":"Icones nas Abas",
   "MM_HELP":"Ajuda",
   "MM_HELP_UT_WEBPAGE":"Página do µTorrent",
   "MM_HELP_UT_FORUMS":"Fóruns do µTorrent",
   "MM_HELP_WEBUI_FEEDBACK":"Send WebUI Feedback",
   "MM_HELP_ABOUT_WEBUI":"About µTorrent WebUI",
   "STM_TORRENTS":"Torrents",
   "STM_TORRENTS_PAUSEALL":"Pausar todos os torrents",
   "STM_TORRENTS_RESUMEALL":"Retomar todos os torrents",
   "SB_DOWNLOAD":"R: %s%z/s",
   "SB_LOCAL":" L: %z/s",
   "SB_OVERHEAD":" O: %z/s",
   "SB_TOTAL":" T: %Z",
   "SB_UPLOAD":"E: %s%z/s",
   "SIZE_B":"B",
   "SIZE_EB":"EB",
   "SIZE_GB":"GB",
   "SIZE_KB":"kB",
   "SIZE_MB":"MB",
   "SIZE_PB":"PB",
   "SIZE_TB":"TB",
   "ST_CAPT_ADVANCED":"Avançado",
   "ST_CAPT_BANDWIDTH":"Largura de Banda",
   "ST_CAPT_CONNECTION":"Ligação",
   "ST_CAPT_DISK_CACHE":"Cache do Disco",
   "ST_CAPT_FOLDER":"Directorias",
   "ST_CAPT_GENERAL":"Geral",
   "ST_CAPT_SCHEDULER":"Agendador de Tarefas",
   "ST_CAPT_QUEUEING":"Fila de espera",
   "ST_CAPT_UI_EXTRAS":"Extras UI",
   "ST_CAPT_UI_SETTINGS":"Definições de IU",
   "ST_CAPT_BITTORRENT":"BitTorrent",
   "ST_CAPT_WEBUI":"IU Web",
   "ST_CAPT_TRANSFER_CAP":"Limite de Transferência",
   "ST_CAPT_RUN_PROGRAM":"Correr Programa",
   "ST_CBO_UI_DBLCLK_TOR":"Mostrar propriedades||Iniciar/Parar||Abrir Pasta||Mostrar Barra de Transferências||",
   "ST_CBO_ENCRYPTIONS":"Desactivar||Activar||Forçar||",
   "ST_CBO_PROXY":"(nenhum)||Socks4||Socks5||HTTPS||HTTP||",
   "ST_CBO_TCAP_MODES":"Envios||Transferências||Envios + Transferências||",
   "ST_CBO_TCAP_UNITS":"MB||GB||",
   "ST_CBO_TCAP_PERIODS":"1||2||5||7||10||14||15||20||21||28||30||31||",
   "ST_COL_NAME":"Nome",
   "ST_COL_VALUE":"Valor",
   "ST_SCH_DAYCODES":"Seg||Ter||Qua||Qui||Sex||Sáb||Dom||",
   "ST_SCH_DAYNAMES":"Segunda-feira||Terça-feira||Quarta-feira||Quinta-feira||Sexta-feira||Sábado||Domingo||",
   "ST_SCH_LGND_FULL":"Vel. Máxima",
   "ST_SCH_LGND_FULLEX":"Vel. Máxima - Usa limites de largura de banda normais globais",
   "ST_SCH_LGND_LIMITED":"Limitado",
   "ST_SCH_LGND_LIMITEDEX":"Limitado - Utiliza limites de largura de banda especificados no agendador",
   "ST_SCH_LGND_SEEDING":"Apenas Envio",
   "ST_SCH_LGND_SEEDINGEX":"Apenas Envio - Só envia informação (incluindo incompleto)",
   "ST_SCH_LGND_OFF":"Desligar",
   "ST_SCH_LGND_OFFEX":"Desligar - Para todos os torrents não forçados",
   "ST_SEEDTIMES_HOURS":"<= %d horas",
   "ST_SEEDTIMES_IGNORE":"(Ignorar)",
   "ST_SEEDTIMES_MINUTES":"<= %d minutos",
   "TIME_DAYS_HOURS":"%dd %dh",
   "TIME_HOURS_MINS":"%dh %dm",
   "TIME_MINS_SECS":"%dm %ds",
   "TIME_SECS":"%ds",
   "TIME_WEEKS_DAYS":"%dsm %dd",
   "TIME_YEARS_WEEKS":"%da %dsm",
   "ML_MORE_ACTIONS":null,
   "Torrents":null,
   "Feeds":null,
   "App":null,
   "country":null,
   "ETA":null,
   "of":null,
   "/s":null,
   "Paste a torrent or feed URL":null,
   "Home":null,
   "Logout":null,
   "Seeding":null,
   "All Feeds":null,
   "bitrate":null,
   "resolution":null,
   "length":null,
   "streamable":null,
   "type":null,
   "remote":null,
   "about":null,
   "sessions":null,
   "share":null,
   "Share this torrent":null,
   "Share link":null,
   "add":null,
   "logout":null,
   "log in":null,
   "anywhere access":null,
   "stay signed in":null,
   "download":null,
   "Your client is currently not available. Verify that it is connected to the internet.":null,
   "Unable to communicate with your &micro;Torrent client. This message will disappear automatically when a connection is re-established.":null,
   "Open file":null,
   "Download to your computer":null,
   "Open with VLC Media Player":null,
   "Actions":null,
   "season":null,
   "DLG_ABOUT_VERSION_LEGEND":null,
   "DLG_ABOUT_VERSION_VERSION":null,
   "DLG_ABOUT_VERSION_REVISION":null,
   "DLG_ABOUT_VERSION_BUILD_DATE":null,
   "DLG_ABOUT_VERSION_PEER_ID":null,
   "DLG_ABOUT_VERSION_USER_AGENT":null,
   "DLG_ABOUT_UPNP_EXTERNAL_ADDRESS":null,
   "DLG_ABOUT_UI_REVISION":null,
   "DLG_SETTINGS_SAVE":null,
   "DLG_SETTINGS_MENU_TITLE":null,
   "DLG_SETTINGS_D_REMOTE_01":"BitTorrent Remoto",
   "DLG_SETTINGS_D_REMOTE_02":"O BitTorrent Remoto fornece uma maneira fácil e segura de aceder ao seu cliente através de um navegador.",
   "DLG_SETTINGS_D_REMOTE_03":"Ative apenas a conexão em baixo, escolha um nome de computador e senha, e deixe este computador ligado.",
   "DLG_SETTINGS_D_REMOTE_04":"Saber Mais",
   "DLG_SETTINGS_D_REMOTE_05":"Ativar Acesso BitTorrent Remoto",
   "DLG_SETTINGS_D_REMOTE_06":"Autenticação",
   "DLG_SETTINGS_D_REMOTE_07":"Nome do computador:",
   "DLG_SETTINGS_D_REMOTE_08":"Senha:",
   "DLG_SETTINGS_D_REMOTE_09":"Submeter",
   "ST_CAPT_REMOTE":"BitTorrent Remoto",
   "STATUS_REMOTE_01":"Acessível",
   "STATUS_REMOTE_02":"A conetar..",
   "STATUS_REMOTE_03":"Inacessível",
   "STATUS_REMOTE_04":"Registo falhado",
   "STATUS_REMOTE_05":"Tem que indicar uma senha para usar o BitTorrent Remoto",
   "STATUS_REMOTE_06":"Não foi possível contactar o serviço BitTorrent Remoto para registar",
   "STATUS_REMOTE_07":"Já existe um computador a usar este nome de utilizador",
   "STATUS_REMOTE_08":"Os nomes de utilizador não podem conter carateres não-Ingleses",
   "STATUS_REMOTE_09":"A senha não pode conter carateres não-Ingleses",
   "STATUS_REMOTE_10":"Estado: "
}