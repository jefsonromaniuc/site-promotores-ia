// Estado global da aplicação
const appState = {
    currentStep: 1,
    selectedArea: null,
    selectedObject: null,
    selectedIA: null,
    isLoading: false
};

// Elementos DOM principais
const elements = {
    steps: document.querySelectorAll('.step'),
    stepContents: document.querySelectorAll('.step-content'),
    areasListContainer: document.getElementById('areas-list'),
    objectsListContainer: document.getElementById('objects-list'),
    iasListContainer: document.getElementById('ias-list'),
    selectedAreaBadge: document.getElementById('selected-area-badge'),
    selectedObjectBadge: document.getElementById('selected-object-badge'),
    resultAreaBadge: document.getElementById('result-area-badge'),
    resultObjectBadge: document.getElementById('result-object-badge'),
    resultIABadge: document.getElementById('result-ia-badge'),
    promptText: document.getElementById('prompt-text'),
    tutorialVideo: document.getElementById('tutorial-video'),
    iaName: document.getElementById('ia-name'),
    copyFeedback: document.getElementById('copy-feedback'),
    loadingOverlay: document.getElementById('loading')
};

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', function() {
    console.log('Aplicação iniciada');
    initializeApp();
});

// Função principal de inicialização
function initializeApp() {
    try {
        renderAreas();
        updateStepIndicator();
        hideLoading();
        console.log('Aplicação inicializada com sucesso');
    } catch (error) {
        console.error('Erro na inicialização:', error);
        showError('Erro ao carregar a aplicação. Recarregue a página.');
    }
}

// Função para mostrar loading
function showLoading() {
    appState.isLoading = true;
    elements.loadingOverlay.classList.add('show');
}

// Função para esconder loading
function hideLoading() {
    appState.isLoading = false;
    elements.loadingOverlay.classList.remove('show');
}

// Função para mostrar erros
function showError(message) {
    alert(message); // Em produção, usar um modal mais elegante
}

// Função para navegar entre etapas
function goToStep(stepNumber) {
    if (stepNumber < 1 || stepNumber > 4) {
        console.error('Número de etapa inválido:', stepNumber);
        return;
    }

    // Atualizar estado
    appState.currentStep = stepNumber;

    // Atualizar indicador visual
    updateStepIndicator();

    // Mostrar conteúdo da etapa
    showStepContent(stepNumber);

    // Limpar seleções posteriores se necessário
    if (stepNumber === 1) {
        appState.selectedArea = null;
        appState.selectedObject = null;
        appState.selectedIA = null;
    } else if (stepNumber === 2) {
        appState.selectedObject = null;
        appState.selectedIA = null;
    } else if (stepNumber === 3) {
        appState.selectedIA = null;
    }

    // Scroll suave para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função para atualizar indicador de progresso
function updateStepIndicator() {
    elements.steps.forEach((step, index) => {
        const stepNumber = index + 1;
        step.classList.remove('active', 'completed');
        
        if (stepNumber === appState.currentStep) {
            step.classList.add('active');
        } else if (stepNumber < appState.currentStep) {
            step.classList.add('completed');
        }
    });

    // Atualizar setas
    const arrows = document.querySelectorAll('.step-arrow');
    arrows.forEach((arrow, index) => {
        arrow.classList.remove('active');
        if (index + 1 < appState.currentStep) {
            arrow.classList.add('active');
        }
    });
}

// Função para mostrar conteúdo da etapa
function showStepContent(stepNumber) {
    elements.stepContents.forEach((content, index) => {
        content.classList.remove('active');
        if (index + 1 === stepNumber) {
            content.classList.add('active');
            content.classList.add('animate-slide-up');
        }
    });
}

// Função para renderizar áreas
function renderAreas() {
    if (!elements.areasListContainer) {
        console.error('Container de áreas não encontrado');
        return;
    }

    const areasHTML = Object.entries(promptsData.areas).map(([key, area]) => {
        const objectCount = Object.keys(area.objetos).length;
        return `
            <div class="option-item" onclick="selectArea('${key}')" role="button" tabindex="0">
                <div class="option-icon area">⚖️</div>
                <div class="option-content">
                    <div class="option-title">${area.nome}</div>
                    <div class="option-subtitle">${objectCount} prompts disponíveis</div>
                </div>
            </div>
        `;
    }).join('');

    elements.areasListContainer.innerHTML = areasHTML;
}

// Função para selecionar área
function selectArea(areaKey) {
    if (!promptsData.areas[areaKey]) {
        console.error('Área inválida:', areaKey);
        return;
    }

    showLoading();
    
    setTimeout(() => {
        appState.selectedArea = areaKey;
        renderObjects();
        updateSelectedAreaBadge();
        goToStep(2);
        hideLoading();
    }, 300); // Simula carregamento
}

// Função para renderizar objetos/documentos
function renderObjects() {
    if (!appState.selectedArea || !elements.objectsListContainer) {
        console.error('Área não selecionada ou container não encontrado');
        return;
    }

    const areaData = promptsData.areas[appState.selectedArea];
    const objectsHTML = Object.entries(areaData.objetos).map(([key, object]) => {
        const iaCount = Object.keys(object.ias).length;
        return `
            <div class="option-item" onclick="selectObject('${key}')" role="button" tabindex="0">
                <div class="option-icon document">📄</div>
                <div class="option-content">
                    <div class="option-title">${object.nome}</div>
                    <div class="option-subtitle">${iaCount} IAs disponíveis</div>
                </div>
            </div>
        `;
    }).join('');

    elements.objectsListContainer.innerHTML = objectsHTML;
}

// Função para selecionar objeto/documento
function selectObject(objectKey) {
    if (!appState.selectedArea || !promptsData.areas[appState.selectedArea].objetos[objectKey]) {
        console.error('Objeto inválido:', objectKey);
        return;
    }

    showLoading();
    
    setTimeout(() => {
        appState.selectedObject = objectKey;
        renderIAs();
        updateSelectedObjectBadge();
        goToStep(3);
        hideLoading();
    }, 300);
}

// Função para renderizar IAs
function renderIAs() {
    if (!appState.selectedArea || !appState.selectedObject || !elements.iasListContainer) {
        console.error('Seleções incompletas ou container não encontrado');
        return;
    }

    const objectData = promptsData.areas[appState.selectedArea].objetos[appState.selectedObject];
    const iasHTML = Object.entries(objectData.ias).map(([key, ia]) => {
        const iaInfo = promptsData.ias[key];
        return `
            <div class="option-item" onclick="selectIA('${key}')" role="button" tabindex="0">
                <div class="option-icon ia">🤖</div>
                <div class="option-content">
                    <div class="option-title">${iaInfo.nome}</div>
                    <div class="option-subtitle">${iaInfo.descricao}</div>
                </div>
            </div>
        `;
    }).join('');

    elements.iasListContainer.innerHTML = iasHTML;
}

// Função para selecionar IA - VERSÃO CORRIGIDA COM MODAL
function selectIA(iaKey) {
    if (!appState.selectedArea || !appState.selectedObject || 
        !promptsData.areas[appState.selectedArea].objetos[appState.selectedObject].ias[iaKey]) {
        console.error('IA inválida:', iaKey);
        return;
    }

    showLoading();
    
    setTimeout(() => {
        appState.selectedIA = iaKey;
        
        // VERIFICAR PRÉ-REQUISITOS ANTES DE MOSTRAR RESULTADO
        const objectData = promptsData.areas[appState.selectedArea].objetos[appState.selectedObject];
        
        if (objectData.prerequisito && objectData.prerequisito.necessario) {
            // Mostrar modal de pré-requisito
            mostrarModalPrerequisito(objectData.prerequisito);
            hideLoading();
        } else {
            // Prosseguir normalmente
            renderResult();
            goToStep(4);
            hideLoading();
        }
    }, 300);
}

// Função para renderizar resultado final
function renderResult() {
    if (!appState.selectedArea || !appState.selectedObject || !appState.selectedIA) {
        console.error('Seleções incompletas para renderizar resultado');
        return;
    }

    try {
        // Obter dados
        const areaData = promptsData.areas[appState.selectedArea];
        const objectData = areaData.objetos[appState.selectedObject];
        const promptData = objectData.ias[appState.selectedIA];
        const iaData = promptsData.ias[appState.selectedIA];

        // Atualizar badges
        if (elements.resultAreaBadge) elements.resultAreaBadge.textContent = areaData.nome;
        if (elements.resultObjectBadge) elements.resultObjectBadge.textContent = objectData.nome;
        if (elements.resultIABadge) elements.resultIABadge.textContent = iaData.nome;

        // Atualizar prompt
        if (elements.promptText) elements.promptText.textContent = promptData.prompt;

        // Atualizar vídeo
        if (elements.tutorialVideo && promptData.video) {
            const videoUrl = `https://www.youtube.com/embed/${promptData.video}?rel=0&modestbranding=1`;
            elements.tutorialVideo.src = videoUrl;
        }

        // Atualizar nome da IA no título do vídeo
        if (elements.iaName) elements.iaName.textContent = iaData.nome;

        console.log('Resultado renderizado com sucesso');
    } catch (error) {
        console.error('Erro ao renderizar resultado:', error);
        showError('Erro ao carregar o resultado. Tente novamente.');
    }
}

// Função para atualizar badge da área selecionada
function updateSelectedAreaBadge() {
    if (elements.selectedAreaBadge && appState.selectedArea) {
        const areaData = promptsData.areas[appState.selectedArea];
        elements.selectedAreaBadge.textContent = areaData.nome;
    }
}

// Função para atualizar badge do objeto selecionado
function updateSelectedObjectBadge() {
    if (elements.selectedObjectBadge && appState.selectedArea && appState.selectedObject) {
        const objectData = promptsData.areas[appState.selectedArea].objetos[appState.selectedObject];
        elements.selectedObjectBadge.textContent = objectData.nome;
    }
}

// Função para copiar prompt
function copyPrompt() {
    if (!appState.selectedArea || !appState.selectedObject || !appState.selectedIA) {
        console.error('Seleções incompletas para copiar prompt');
        return;
    }

    try {
        const promptData = promptsData.areas[appState.selectedArea]
            .objetos[appState.selectedObject]
            .ias[appState.selectedIA];
        
        // Usar API moderna de clipboard
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(promptData.prompt)
                .then(() => {
                    showCopyFeedback();
                    console.log('Prompt copiado com sucesso');
                })
                .catch(err => {
                    console.error('Erro ao copiar:', err);
                    fallbackCopyText(promptData.prompt);
                });
        } else {
            // Fallback para navegadores mais antigos
            fallbackCopyText(promptData.prompt);
        }
    } catch (error) {
        console.error('Erro ao copiar prompt:', error);
        showError('Erro ao copiar prompt. Tente novamente.');
    }
}

// Função fallback para copiar texto
function fallbackCopyText(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopyFeedback();
        console.log('Prompt copiado usando fallback');
    } catch (err) {
        console.error('Erro no fallback de cópia:', err);
        showError('Não foi possível copiar o prompt automaticamente. Copie manualmente.');
    } finally {
        document.body.removeChild(textArea);
    }
}

// Função para mostrar feedback de cópia
function showCopyFeedback() {
    if (elements.copyFeedback) {
        elements.copyFeedback.classList.add('show');
        setTimeout(() => {
            elements.copyFeedback.classList.remove('show');
        }, 2000);
    }
}

// Função para resetar aplicação
function resetApp() {
    showLoading();
    
    setTimeout(() => {
        // Resetar estado
        appState.currentStep = 1;
        appState.selectedArea = null;
        appState.selectedObject = null;
        appState.selectedIA = null;

        // Limpar conteúdos
        if (elements.selectedAreaBadge) elements.selectedAreaBadge.textContent = '';
        if (elements.selectedObjectBadge) elements.selectedObjectBadge.textContent = '';
        if (elements.tutorialVideo) elements.tutorialVideo.src = '';

        // Voltar para primeira etapa
        goToStep(1);
        hideLoading();
        
        console.log('Aplicação resetada');
    }, 300);
}

// ===== FUNÇÕES DO MODAL DE PRÉ-REQUISITOS =====

// Função para mostrar modal de pré-requisito
function mostrarModalPrerequisito(prerequisito) {
    const modal = document.getElementById('prerequisito-modal');
    const texto = document.getElementById('modal-prerequisito-text');
    
    if (texto) texto.textContent = prerequisito.mensagem || 'Este prompt requer preparação prévia.';
    
    if (modal) {
        modal.classList.add('show');
        // Impedir scroll da página
        document.body.style.overflow = 'hidden';
    }
}

// Função para fechar modal
function fecharModal() {
    const modal = document.getElementById('prerequisito-modal');
    if (modal) {
        modal.classList.remove('show');
        // Restaurar scroll da página
        document.body.style.overflow = 'auto';
    }
}

// Função para ir para pré-requisito
function irParaPrerequisito() {
    fecharModal();
    // Resetar seleções
    appState.selectedObject = null;
    appState.selectedIA = null;
    // Voltar para seleção de documentos
    goToStep(2);
}

// Função para continuar mesmo assim
function continuarMesmoAssim() {
    fecharModal();
    // Prosseguir com o resultado
    renderResult();
    goToStep(4);
}

// Fechar modal clicando fora dele
document.addEventListener('click', function(event) {
    const modal = document.getElementById('prerequisito-modal');
    if (event.target === modal) {
        fecharModal();
    }
});

// Fechar modal com tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('prerequisito-modal');
        if (modal && modal.classList.contains('show')) {
            fecharModal();
        } else if (appState.currentStep > 1) {
            goToStep(appState.currentStep - 1);
        }
    }
    
    // Enter para avançar (se possível)
    if (event.key === 'Enter' && event.target.classList.contains('option-item')) {
        event.target.click();
    }
});

// Função para lidar com redimensionamento da janela
window.addEventListener('resize', function() {
    // Ajustes responsivos se necessário
    console.log('Janela redimensionada');
});

// Função para lidar com erros globais
window.addEventListener('error', function(event) {
    console.error('Erro global capturado:', event.error);
    // Em produção, enviar erro para serviço de monitoramento
});

// Função utilitária para debug (remover em produção)
function debugState() {
    console.log('Estado atual da aplicação:', appState);
}

// Expor funções globais necessárias
window.goToStep = goToStep;
window.selectArea = selectArea;
window.selectObject = selectObject;
window.selectIA = selectIA;
window.copyPrompt = copyPrompt;
window.resetApp = resetApp;
window.debugState = debugState; // Remover em produção

// Expor funções do modal globalmente
window.mostrarModalPrerequisito = mostrarModalPrerequisito;
window.fecharModal = fecharModal;
window.irParaPrerequisito = irParaPrerequisito;
window.continuarMesmoAssim = continuarMesmoAssim;

