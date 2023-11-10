// FilterModal.tsx
import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { filterModalStyles as styles } from "./Styles";

interface FilterModalProps {
  isVisible: boolean;
  onClose: () => void;
}

interface FilterModalState {
  selectedFilter: string | null;
}

class FilterModal extends React.Component<FilterModalProps, FilterModalState> {
  constructor(props: FilterModalProps) {
    super(props);
    this.state = {
      selectedFilter: null,
    };
  }

  handleFilterSelect = (value: string | null) => {
    this.setState({ selectedFilter: value });
  };

  render() {
    const { isVisible, onClose } = this.props;
    const { selectedFilter } = this.state;

    return (
      <Modal
        transparent={true}
        animationType="slide"
        visible={isVisible}
        onRequestClose={onClose}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Filtrar por:</Text>
          <RNPickerSelect
            onValueChange={this.handleFilterSelect}
            items={[
              { label: "Popularidade", value: "popularidade" },
              { label: "Lançamento", value: "lancamento" },
              { label: "Gênero", value: "genero" },
            ]}
            placeholder={{ label: "Selecione um filtro", value: null }}
            value={selectedFilter}
          />
          {selectedFilter === "genero" && (
            <RNPickerSelect
              onValueChange={(value) => this.handleFilterSelect(value)}
              items={[
                { label: "Terror", value: "terror" },
                { label: "Comédia", value: "comedia" },
                // Adicione mais gêneros conforme necessário
              ]}
              placeholder={{ label: "Selecione um gênero", value: null }}
            />
          )}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={{ color: "#fff" }}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

export default FilterModal;
