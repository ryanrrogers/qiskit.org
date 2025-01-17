<script lang="ts">
import { Course, Prerequisite } from 'constants/learnContent'
import { Component } from 'vue-property-decorator'
import CourseOverviewPage from '~/components/logic/CourseOverviewPage.vue'
import { GeneralLink, MultipleQubitsAndEntanglementUrl } from '~/constants/appLinks'
import { RecommendedReading } from '~/components/learn/ExternalRecommendedReadings.vue'

@Component({
  head: () => ({
    title: 'Quantum States and Qubits'
  })
})
export default class MultipleQubitsAndEntanglementPage extends CourseOverviewPage {
  routeName: string = 'multiple-qubits-and-entanglement'

  headerTitle = 'Multiple Qubits and Entanglement'
  headerDescription = ['We\'ve seen some interesting effects with isolated qubits and single qubit gates, but the true power of quantum computing comes from interactions between qubits. In this section we will introduce multiple qubit gates and explore the interesting behaviours of multi-qubit systems.']

  headerImg = '/images/learn/course/multiple-qubits-and-entanglement/multiple-qubits-and-entanglement.png'

  backToTextbookHomeLink: GeneralLink = {
    url: '/learn',
    label: 'Home',
    segment: {
      cta: 'back-to-textbook-home', location: 'header'
    }
  }

  startLearningCTA: GeneralLink = {
    url: MultipleQubitsAndEntanglementUrl.Introduction,
    label: 'Start learning',
    segment: {
      cta: 'introduction', location: 'header'
    }
  }

  references: string[] = []
  externalRecommendedReadingsPreamble: string = ''
  links: RecommendedReading[] = [
    {
      url: 'http://mmrc.amss.cas.cn/tlb/201702/W020170224608149940643.pdf',
      author: 'Michael Nielsen, et al.,',
      label: 'Quantum Computation and Quantum Information (Chapter 1)',
      segment: {
        cta: 'quantum-computation-and-quantum-information',
        location: 'external-recommended-readings'
      }
    },
    {
      url: 'http://mmrc.amss.cas.cn/tlb/201702/W020170224608149125645.pdf',
      author: 'Phillip Kaye, et al.,',
      label: 'An Introduction to Quantum Computing (Chapters 1-3)',
      segment: {
        cta: 'an-introduction-to-quantum-computing',
        location: 'external-recommended-readings'
      }
    },
    {
      url: 'https://homepages.cwi.nl/~rdewolf/qcnotes.pdf',
      author: 'Ronald de Wolf,',
      label: 'Quantum Computing: Lecture Notes (Chapters 1 and 2)',
      segment: {
        cta: 'quantum-computing-lecture-notes',
        location: 'external-recommended-readings'
      }
    },
    {
      url: 'http://cleve.iqc.uwaterloo.ca/resources/QIC-710-F21/Qic710Primer.pdf',
      author: 'Richard Cleve,',
      label: 'Quantum Information Processing — A Primer for Beginners',
      segment: {
        cta: 'quantum-information-processing',
        location: 'external-recommended-readings'
      }
    }
  ]

  courses: Course[] = [
    {
      image: 'introduction.png',
      label: 'Introduction',
      segment: { cta: 'introduction', location: 'course' },
      url: MultipleQubitsAndEntanglementUrl.Introduction
    },
    {
      image: 'multiple-qubits-and-entangled-states.png',
      label: 'Multiple Qubits and Entangled States',
      segment: { cta: 'multiple-qubits-and-entangled-states', location: 'course' },
      url: MultipleQubitsAndEntanglementUrl.MultipleQubitsAndEntangledStates
    },
    {
      image: 'phase-kickback.png',
      label: 'Phase Kickback',
      segment: { cta: 'phase-kickback', location: 'course' },
      url: MultipleQubitsAndEntanglementUrl.PhaseKickback
    },
    {
      image: 'basic-circuit-identities.png',
      label: 'Basic Circuit Identities',
      segment: { cta: 'basic-circuit-identities', location: 'course' },
      url: MultipleQubitsAndEntanglementUrl.BasicCircuitIdentities
    },
    {
      image: 'proving-universality.png',
      label: 'Proving Universality',
      segment: { cta: 'proving-universality', location: 'course' },
      url: MultipleQubitsAndEntanglementUrl.ProvingUniversality
    },
    {
      image: 'classical-computation-on-a-quantum-computer.png',
      label: 'Classical Computation on a Quantum Computer',
      segment: { cta: 'classical-computation-on-a-quantum-computer', location: 'course' },
      url: MultipleQubitsAndEntanglementUrl.ClassicalComputationOnAQuantumComputer
    }
  ]

  prerequisites: Prerequisite[] = [
    {
      title: 'Quantum States and Qubits',
      description:
        "This chapter introduces the computing concepts that we'll explore in later chapters, then introduces basic quantum concepts.",
      segment: {
        cta: 'quantum-states-and-qubits', location: 'prerequisite-material'
      },
      url:
        'https://learn.qiskit.org/course/ch-states/introduction'
    },
    {
      title: 'Python and Jupyter Notebooks',
      description:
        "Python is a programming language where you don't need to compile. You can just run it line by line...",
      segment: {
        cta: 'python-and-jupyter-notebooks', location: 'prerequisite-material'
      },
      url:
        'https://learn.qiskit.org/course/ch-prerequisites/introduction-to-python-and-jupyter-notebooks'
    }
  ]

  imageUrlBase = '/images/learn/course/multiple-qubits-and-entanglement'
}
</script>
