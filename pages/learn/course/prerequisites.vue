<script lang="ts">
import { Course, Prerequisite } from 'constants/learnContent'
import { Component } from 'vue-property-decorator'
import CourseOverviewPage from '~/components/logic/CourseOverviewPage.vue'
import { GeneralLink, PrerequisitesUrl } from '~/constants/appLinks'
import { RecommendedReading } from '~/components/learn/ExternalRecommendedReadings.vue'

@Component({
  head: () => ({
    title: 'Prerequisites'
  })
})
export default class PrerequisitesPage extends CourseOverviewPage {
  routeName: string = 'prerequisites'

  headerTitle = 'Prerequisites'
  headerDescription = ['This is a comprehensive guide for setting up your environment on your personal computer for working with Qiskit Textbook. This will help you reproduce the results as you see them on the textbook website. The Qiskit Textbook is written in Jupyter Notebooks.']

  headerImg = '/images/learn/course/prerequisites/prerequisites.png'

  backToTextbookHomeLink: GeneralLink = {
    url: '/learn',
    label: 'Home',
    segment: {
      cta: 'back-to-textbook-home', location: 'header'
    }
  }

  startLearningCTA: GeneralLink = {
    url: PrerequisitesUrl.Introduction,
    label: 'Start learning',
    segment: {
      cta: 'introduction', location: 'header'
    }
  }

  references: string[] = []
  externalRecommendedReadingsPreamble: string = ''
  links: RecommendedReading[] = [
    {
      url: 'https://math.mit.edu/~gs/linearalgebra/',
      author: 'Gilbert Strang,',
      label: 'Introduction to Linear Algebra',
      segment: {
        cta: 'introduction-to-linear-algebra',
        location: 'external-recommended-readings'
      }
    },
    {
      url: 'https://machinelearningmastery.com/gentle-introduction-linear-algebra/',
      author: 'Jason Brownlee,',
      label: 'A Gentle Introduction to Linear Algebra',
      segment: {
        cta: 'gentle-introduction-to-linear-algebra',
        location: 'external-recommended-readings'
      }
    }
  ]

  courses: Course[] = [
    {
      image: 'environment-setup.png',
      label: 'Setting Up Your Environment',
      segment: { cta: 'setting-up-your-environment', location: 'course' },
      url: PrerequisitesUrl.SettingUp
    },
    {
      image: 'introduction.png',
      label: 'Python and Jupyter Notebooks',
      segment: { cta: 'python-and-jupyter-notebooks', location: 'course' },
      url: PrerequisitesUrl.Introduction
    }
  ]

  prerequisites: Prerequisite[] = []

  imageUrlBase = '/images/learn/course/prerequisites'
}
</script>
